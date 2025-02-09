import { program } from "commander";
import { addExpense } from "./commands/add.mjs";
import { listExpenses } from "./commands/list.mjs";
import { deleteExpense } from "./commands/delete.mjs";
import { summarizeExpenses } from "./commands/summary.mjs";
import { createCSV } from "./commands/csv.mjs";
import { setBudget } from "./commands/budget.mjs";

//Adding commands for the program here
program
  .command("add")
  .description("Add an expense to store")
  .requiredOption("--description <desc>", "Expense description")
  .requiredOption("--amount <amount>", "Expense amount", parseFloat)
  .requiredOption("--category <category>", "Expense category")
  .action(addExpense);

program
  .command("list")
  .description("List the expenses stored")
  .option("--category <category>", "Filter by category")
  .action(listExpenses);

program
  .command("summary")
  .description("Summarize the expenses")
  .option("--month <month>", "Filter by month (1-12)", parseInt)
  .option("--category <category>", "Filter by category")
  .action(summarizeExpenses);

program
  .command("delete")
  .description("Delete an expense")
  .requiredOption("--id <id>", "Expense ID", parseInt)
  .action(deleteExpense);

program
  .command("csv")
  .description("Create a CSV file of stored expenses")
  .action(createCSV);

program
  .command("set-budget")
  .description("Set a budget for a specific month")
  .requiredOption("--month <month>", "Month to set budget for", parseInt)
  .requiredOption("--budget <budget>", "Budget for the month",parseInt)
  .action(setBudget);

// program
//   .command("")
program.parse(process.argv);
