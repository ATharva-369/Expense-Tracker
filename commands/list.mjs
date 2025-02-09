import fs from "fs-extra";
import { join } from "path";
import chalk from "chalk";

const filePath = join(process.cwd(), "data", "expenses.json");

export async function listExpenses({ category }) {
  let expenses = await fs.readJson(filePath).catch(() => []);

  if (!expenses.length) {
    console.log(chalk.yellow("No expenses stored"));
    return;
  }

  console.log(chalk.green("\nId  Date  Description  Category  Amount"));

  if (category) {
    expenses = expenses.filter((exp) => {
      return exp.category === category;
    });
  }

  expenses.forEach((exp) => {
    console.log(
      `${exp.id}  ${exp.date}  ${exp.description}  ${exp.category}  ${exp.amount}`
    );
  });
}
