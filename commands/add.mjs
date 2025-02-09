import fs from "fs-extra";
import { join } from "path";
import dayjs from "dayjs";
import chalk from "chalk";

const filePath = join(process.cwd(), "data", "expenses.json");
const budgetFilePath = join(process.cwd(), "data", "budgets.json");

export async function addExpense({ description, amount, category }) {
  let expenses = await fs.readJson(filePath).catch(() => []);
  const newExpense = {
    id: expenses.length ? expenses[expenses.length - 1].id + 1 : 1,
    date: dayjs().format("YYYY-MM-DD"),
    description,
    amount: parseFloat(amount),
    category: category,
  };

  expenses.push(newExpense);
  const filteredExpenses = expenses.filter((exp) => {
    const currentMonth = dayjs().month() + 1;
    const currentYear = dayjs().year();
    const expenseDate = dayjs(exp.date);
    return (
      expenseDate.year() === currentYear &&
      expenseDate.month() + 1 === currentMonth
    );
  });

  const totalAmount = filteredExpenses.reduce(
    (sum, exp) => sum + exp.amount,
    0
  );

  const budgets = await fs.readJson(budgetFilePath).catch(() => []);
    try{
    const budget = budgets[dayjs().month()].budget;
    if (totalAmount > budget) {
      console.log(
        chalk.yellowBright(
          "You are exceeding the monthly budget of: " + budget.toString()
        )
      );
    }
  }
  catch{
    
  }

  await fs.writeJSON(filePath, expenses, { spaces: 2 });

  console.log(`Expense stored successfully {ID: ${newExpense.id}}`);
}
