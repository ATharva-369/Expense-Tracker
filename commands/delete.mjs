import fs from "fs-extra";
import { join } from "path";
import chalk from "chalk";

const filePath = join(process.cwd(), "data", "expenses.json");

export async function deleteExpense({id}) {
  let expenses = await fs.readJson(filePath).catch(() => []);
  const index = expenses.findIndex(exp => exp.id === id);

  if(index === -1){
    console.log(chalk.red(`Expense with ID ${id} not found.`));
    return;
}

const deletedExpense = expenses.splice(index, 1)[0];
await fs.writeJSON(filePath, expenses, {spaces: 2});

console.log(chalk.green(`Delete expense: "${deletedExpense.description}" `))

}
