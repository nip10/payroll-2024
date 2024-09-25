import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { RetentionResult } from "../lib/calculate";
import { cn } from "@/lib/utils";

interface ResultsTableProps {
  results: RetentionResult[];
  monthlySalary: number;
}

const ResultsTable: React.FC<ResultsTableProps> = ({
  results,
  monthlySalary,
}) => {
  // Get the retention value for the first period (jan-ago)
  const firstPeriodRetention = results[0]?.retention || 0;

  // Calculate total retention and total reduction
  const totalRetention = results.reduce(
    (acc, result) => acc + result.retention,
    0
  );
  const totalReduction = results.reduce(
    (acc, result) => acc + (firstPeriodRetention - result.retention),
    0
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Período</TableHead>
          <TableHead>Retenção (€)</TableHead>
          <TableHead>Retenção (%)</TableHead>
          <TableHead>Redução (€)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {results.map((result, i) => {
          // Calculate the reduction compared to the first period's retention
          const reduction = firstPeriodRetention - result.retention;

          return (
            <TableRow
              key={result.month}
              className={cn(
                (i === 8 || i === 9) &&
                  "bg-green-100 hover:bg-green-200 font-bold",
                result.month.startsWith("Subsidio") &&
                  "bg-slate-100 hover:bg-slate-200"
              )}
            >
              <TableCell className="first-letter:capitalize">
                {result.month}
              </TableCell>
              <TableCell className="font-[family-name:var(--font-geist-mono)]">
                {new Intl.NumberFormat("pt-PT", {
                  style: "currency",
                  currency: "EUR",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(result.retention)}
              </TableCell>
              <TableCell className="font-[family-name:var(--font-geist-mono)]">
                {new Intl.NumberFormat("pt-PT", {
                  style: "percent",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(result.retention / monthlySalary)}
              </TableCell>
              <TableCell className="font-[family-name:var(--font-geist-mono)]">
                {new Intl.NumberFormat("pt-PT", {
                  style: "currency",
                  currency: "EUR",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(reduction)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>

      {/* Footer with totals */}
      <TableFooter>
        <TableRow>
          <TableCell className="font-bold">Totais</TableCell>
          <TableCell className="font-bold">
            {new Intl.NumberFormat("pt-PT", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(totalRetention)}
          </TableCell>
          <TableCell className="font-bold">
            {/* Total Retention Percentage over the year (divided by 14 months for holiday and Christmas subsidies) */}
            {new Intl.NumberFormat("pt-PT", {
              style: "percent",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(totalRetention / (monthlySalary * 14))}
          </TableCell>
          <TableCell className="font-bold">
            {new Intl.NumberFormat("pt-PT", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(totalReduction)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ResultsTable;
