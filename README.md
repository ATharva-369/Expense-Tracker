# Expense Tracker CLI

## [Project URL](https://roadmap.sh/projects/expense-tracker)


## Overview
This is a command-line interface (CLI) application for tracking expenses. Users can add, list, delete, summarize expenses, export data to CSV, and set a budget for specific months.

## Installation

Ensure you have **Node.js** installed. Then, clone the repository and install dependencies:

```sh
yarn install
```

## Usage

### 1. Add an Expense
```sh
node index.mjs add --description "Bought chocolate" --amount 100 --category "Food"
```
✅ Adds an expense with a description, amount, and category.

### 2. List Expenses
```sh
node index.mjs list
```
✅ Displays all stored expenses.

#### Filter by Category:
```sh
node index.mjs list --category "Food"
```
✅ Lists only expenses from a specific category.

### 3. Summarize Expenses
```sh
node index.mjs summary
```
✅ Displays total expenses.

#### Summary for a Specific Month:
```sh
node index.mjs summary --month 8
```
✅ Shows expenses only for August.

#### Summary by Category:
```sh
node index.mjs summary --category "Transport"
```
✅ Shows expenses only for Transport category.

### 4. Delete an Expense
```sh
node index.mjs delete --id 2
```
✅ Deletes an expense by ID.

### 5. Export Expenses to CSV
```sh
node index.mjs csv
```
✅ Exports all stored expenses to a CSV file.

### 6. Set a Monthly Budget
```sh
node index.mjs set-budget --month 8 --budget 5000
```
✅ Sets a budget of $5000 for August.

## Dependencies
- **Commander.js** - CLI argument parsing
- **fs-extra** - File system operations
- **json2csv** - Exporting JSON data to CSV
- **dayjs** - Handling dates

## License
This project is open-source and available under the **MIT License**.

