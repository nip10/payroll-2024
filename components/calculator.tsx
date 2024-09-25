"use client";

import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dep_1 } from "../data/dep_1";
import { calculateAnnualRetention, RetentionResult } from "../lib/calculate";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ResultsTable from "./results-table";
import { dep_2 } from "@/data/dep_2";
import { dep_3 } from "@/data/dep_3";
import { dep_4 } from "@/data/dep_4";
import { dep_5 } from "@/data/dep_5";
import { dep_6 } from "@/data/dep_6";
import { dep_7 } from "@/data/dep_7";
import { pensions_1 } from "@/data/pensions_1";
import { pensions_2 } from "@/data/pensions_2";
import { pensions_3 } from "@/data/pensions_3";
import { pensions_4 } from "@/data/pensions_4";

// Define validation schema using Zod
const FormSchema = z.object({
  monthlySalary: z.coerce
    .number({ invalid_type_error: "Remuneração deve ser um número." })
    .min(1, { message: "Remuneração deve ser maior que 0." })
    .default(1500),
  numDependents: z.coerce
    .number({ invalid_type_error: "Número de dependentes deve ser um número." })
    .min(0, { message: "Dependentes não podem ser negativos." })
    .default(0),
  selectedTable: z.string().min(1, "Selecione uma tabela."),
});

// Define available tables
const tables = [
  {
    id: "dep_1",
    label: `${dep_1.incomeType} - ${dep_1.context}`,
    data: dep_1,
  },
  {
    id: "dep_2",
    label: `${dep_2.incomeType} - ${dep_2.context}`,
    data: dep_2,
  },
  {
    id: "dep_3",
    label: `${dep_3.incomeType} - ${dep_3.context}`,
    data: dep_3,
  },
  {
    id: "dep_4",
    label: `${dep_4.incomeType} - ${dep_4.context}`,
    data: dep_4,
  },
  {
    id: "dep_5",
    label: `${dep_5.incomeType} - ${dep_5.context}`,
    data: dep_5,
  },
  {
    id: "dep_6",
    label: `${dep_6.incomeType} - ${dep_6.context}`,
    data: dep_6,
  },
  {
    id: "dep_7",
    label: `${dep_7.incomeType} - ${dep_7.context}`,
    data: dep_7,
  },
  {
    id: "pensions_1",
    label: `${pensions_1.incomeType} - ${pensions_1.context}`,
    data: pensions_1,
  },
  {
    id: "pensions_2",
    label: `${pensions_2.incomeType} - ${pensions_2.context}`,
    data: pensions_2,
  },
  {
    id: "pensions_3",
    label: `${pensions_3.incomeType} - ${pensions_3.context}`,
    data: pensions_3,
  },
  {
    id: "pensions_4",
    label: `${pensions_4.incomeType} - ${pensions_4.context}`,
    data: pensions_4,
  },
];

interface CalculatorState {
  monthlySalary: number;
  numDependents: number;
  numHandicap: number;
  selectedTable: string;
}

const defaultValues: CalculatorState = {
  monthlySalary: 1500,
  numDependents: 0,
  numHandicap: 0,
  selectedTable: tables[0].id,
};

const Calculator = () => {
  // State to hold the results of the calculation
  const [results, setResults] = useState<RetentionResult[]>(() =>
    calculateAnnualRetention(
      defaultValues.monthlySalary,
      tables[0].data,
      defaultValues.numDependents || defaultValues.numHandicap
    )
  );

  // UseForm hook from react-hook-form with Zod validation
  const form = useForm<CalculatorState>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  const selectedTableWatcher = useWatch({
    name: "selectedTable",
    control: form.control,
  });
  const shouldShowDependents = [
    "dep_1",
    "dep_2",
    "dep_3",
    "dep_5",
    "dep_6",
    "dep_7",
  ].includes(selectedTableWatcher);
  const shouldShowHandicap = ["pensions_3", "pensions_4"].includes(
    selectedTableWatcher
  );

  useEffect(() => {
    // Reset dependents and handicap when changing tables
    form.setValue("numDependents", 0);
    form.setValue("numHandicap", 0);
  }, [form, selectedTableWatcher]);

  // Handle form submission
  const onSubmit = (data: CalculatorState) => {
    const selectedTable = tables.find(
      (table) => table.id === data.selectedTable
    )?.data;

    if (selectedTable) {
      const newResults = calculateAnnualRetention(
        data.monthlySalary,
        selectedTable,
        data.numDependents ?? data.numHandicap ?? 0
      );
      setResults(newResults);
    }
  };

  return (
    <Form {...form}>
      {/* Use onChange instead of onSubmit to calculate the retention on every form change */}
      <form onChange={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Table selection */}
        <FormField
          control={form.control}
          name="selectedTable"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Tabela</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger id="table-select">
                    <SelectValue placeholder="Selecione a Tabela" />
                  </SelectTrigger>
                  <SelectContent>
                    {tables.map((table) => (
                      <SelectItem key={table.id} value={table.id}>
                        {table.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Monthly salary input */}
        <FormField
          control={form.control}
          name="monthlySalary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Remuneração mensal (€)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Number of dependents input */}
        {shouldShowDependents && (
          <FormField
            control={form.control}
            name="numDependents"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de Dependentes</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* Number of handicaps input */}
        {shouldShowHandicap && (
          <FormField
            control={form.control}
            name="numDependents"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Número de pessoas com deficiencia das Forças Armadas
                </FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </form>

      {/* Divider */}
      <div className="h-[1px] bg-slate-200 w-full my-6"></div>

      {/* Results table */}
      <ResultsTable
        results={results}
        monthlySalary={form.getValues("monthlySalary")}
      />
    </Form>
  );
};

export default Calculator;
