#!/usr/bin/env node

import inquirer from "inquirer";

let totalAmount: number = 100000;
let pin: number = 6688;

const pinAnswer = await inquirer.prompt({
  name: "pin",
  type: "number",
  message: "Enter your pin number",
});
if (pinAnswer.pin === pin) {
  console.log("correct pin");

  const actionAnswer = await inquirer.prompt([
    {
      name: "action",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check Balance", "fast cash"],
    },
  ]);
  if (actionAnswer.action === "withdraw") {
    console.log("Enter your desired amount");

    const amountAnswer = await inquirer.prompt({
      name: "amount",
      type: "number",
      message: "Enter amount",
      
    });
    if (amountAnswer.amount > totalAmount){
      console.log ("insufficient balance")
   }else {
    totalAmount -= amountAnswer.amount
   console.log (`transaction successfull your remaining banlance is ${totalAmount}`)


   }

  }else if (actionAnswer.action === "fast cash"){
    console.log ("select amount")
const EnterAmount = await inquirer.prompt(

    {
        name: "youramount",
        type: "list",
        message: "select your amount",
        choices: ["5000" , "10000" , "20000" , "25000"]
    }
); console.log ("transaction successfull!")

  }else if (actionAnswer.action === "check Balance") {
    console.log(`your current balance is ${totalAmount}`);
    

  }}
  else {
  console.log("Enter correct pin number");
}
