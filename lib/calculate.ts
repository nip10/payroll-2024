import { addMonths } from "date-fns";

type Bracket = {
  remuneracaoMensalMax: number;
  taxaMarginalMax: number;
  parcelaAbate: number | ((monthlySalary: number) => number);
  additionalAmountPerDependent?: number;
};

type Period = {
  period: {
    start: Date;
    end: Date;
  };
  brackets: Bracket[];
};

export type IncomeTable = {
  incomeType: string;
  context: string;
  periods: Period[];
};

function calculateRetention(
  monthlySalary: number,
  table: IncomeTable,
  date: Date,
  numDependents: number
): number {
  // Find the correct period based on the date
  const period = table.periods.find(
    (p) => date >= p.period.start && date <= p.period.end
  );

  if (!period) {
    throw new Error("No matching period found for the provided date.");
  }

  // Find the correct bracket based on the monthly salary
  const bracket = period.brackets.find(
    (b) => monthlySalary <= b.remuneracaoMensalMax
  );

  if (!bracket) {
    throw new Error("No matching bracket found for the provided salary.");
  }

  // Calculate retention: (salary * marginal rate) - abatement + (dependents * additional amount)
  const abate =
    typeof bracket.parcelaAbate === "function"
      ? bracket.parcelaAbate(monthlySalary)
      : bracket.parcelaAbate;

  const retention =
    monthlySalary * bracket.taxaMarginalMax -
    abate -
    numDependents * (bracket.additionalAmountPerDependent ?? 0);

  return Math.max(retention, 0); // Ensure no negative retention
}

export interface RetentionResult {
  month: string;
  retention: number;
}

export function calculateAnnualRetention(
  monthlySalary: number,
  table: IncomeTable,
  numDependents: number
): RetentionResult[] {
  const months: RetentionResult[] = [];
  const baseDate = new Date(2024, 0, 1); // January 1, 2024

  // Add 12 regular months
  for (let i = 0; i < 12; i++) {
    const date = addMonths(baseDate, i); // Get the date for each month
    const retention = calculateRetention(
      monthlySalary,
      table,
      date,
      numDependents
    );

    months.push({
      month: date.toLocaleString("pt-PT", { month: "long" }), // Month name
      retention,
    });
  }

  // Add holiday (Subsidio de Férias) and Christmas (Subsidio de Natal) subsidy rows
  const holidayRetention = calculateRetention(
    monthlySalary,
    table,
    baseDate,
    numDependents
  ); // Use January for holiday calculation
  const christmasRetention = calculateRetention(
    monthlySalary,
    table,
    addMonths(baseDate, 11),
    numDependents
  ); // Use December for Christmas calculation

  months.push(
    {
      month: "Subsidio de Férias",
      retention: holidayRetention,
    },
    {
      month: "Subsidio de Natal",
      retention: christmasRetention,
    }
  );

  return months;
}
