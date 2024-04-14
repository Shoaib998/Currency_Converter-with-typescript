import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green.bold("\n \t Well Come to MSK Currency Exchange\n"))

let exchange_rates: any = {
  USD: 1, // Base Currency United State
  EUR: 0.9, // Enropean Currency
  JYP: 113, // Japenese Currency
  CAD: 1.3, // Canadian Dollar
  AUD: 1.65, // Australian Dollar
  PKR: 277.70, // Pakistan Currency
  // add more currency and its exchange rate if you want
};

//prompt the user to select currencies to convert from and to

let user_Answer = await inquirer.prompt([
  {
    name: "from_Currency",
    type: "list",
    message: "Select the Currency to convert from:",
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
  },
  {
    name: "to_Currency",
    type: "list",
    message: "Select Currency to convert to:",
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
  },
  {
    name: "amoumt",
    type: "input",
    message: "Enter amount to convert:",
  },
]);
// perform currency coversion by using formula

let from_Amount = exchange_rates[user_Answer.from_Currency];

let to_Amount = exchange_rates[user_Answer.to_Currency];

let amount = user_Answer.amoumt;

// formula of Currency COnversion
let base_Amount = amount / from_Amount;

let coverted_Amount = base_Amount * to_Amount;

//Disply Converted Amount

console.log(`Converted Amount = ${chalk.yellow(coverted_Amount.toFixed(2))}`);
