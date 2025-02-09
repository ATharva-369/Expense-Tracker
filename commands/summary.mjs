import fs from "fs-extra";
import { join } from "path";
import chalk from "chalk";
import dayjs from "dayjs"; // Helps with date formatting and filtering

const filePath = join(process.cwd(), "data", "expenses.json");

export async function summarizeExpenses({ month, category }) {
  const expenses = await fs.readJson(filePath).catch(() => []);

  if (!expenses.length) {
    console.log(chalk.yellow("No expenses stored yet."));
    return;
  }
  let filteredExpenses = expenses;

  if (month) {
    const currentYear = dayjs().year();
    filteredExpenses = expenses.filter((exp) => {
      const expenseDate = dayjs(exp.date);
      return (
        expenseDate.year() === currentYear && expenseDate.month() + 1 === month
      );
    });

    if (!filteredExpenses.length) {
      console.log(chalk.yellow(`No expenses for month ${month} found`));
      return;
    }
  }

  if (category) {
    filteredExpenses = expenses.filter((exp) => {
      return exp.category === category;
    });

    if (!filteredExpenses.length) {
      console.log(chalk.yellow(`No expenses for category '${category}'found`));
      return;
    }
  }

  const totalAmount = filteredExpenses.reduce(
    (sum, exp) => sum + exp.amount,
    0
  );

  console.log(
    chalk.green(
      `Total expenses for ${getMonth(month)} and category '${
        category || "All"
      }': Rs ${totalAmount}`
    )
  );
}

function getMonth(month) {
  return month
    ? dayjs()
        .month(month - 1)
        .format("MMMM")
    : "all-time";
}
