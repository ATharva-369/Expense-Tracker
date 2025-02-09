import { Parser } from "json2csv";
import { join } from "path";
import fs from "fs-extra";

const filePath = join(process.cwd(), "data", "expenses.json");

export async function createCSV(){
    const parser = new Parser();
    const jsonData = await fs.readJson(filePath).catch(() => []);
    // console.log(jsonData)
    const csv = parser.parse(jsonData);
    console.log(csv)
    fs.writeFileSync("output.csv", csv);

    console.log("CSV file created as 'output.csv' successfully!");
}

