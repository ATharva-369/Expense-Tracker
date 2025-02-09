import fs from "fs-extra";
import { join } from "path";

const filePath = join(process.cwd(), "data", "budgets.json");

export async function setBudget({ month, budget }) {
  let budgets = await fs.readJson(filePath).catch(() => []);
  budgets[month - 1] = { month, budget };
  await fs.writeJSON(filePath, budgets, { spaces: 2 });

  console.log(`Budgets stored successfully. New budget for month ${month}: ${budgets[month-1].budget}`);
}
