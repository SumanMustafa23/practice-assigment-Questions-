import inquirer from "inquirer";
//set up two variables containing number values set up a variable  to bold an operator  (+ or -) create a function that takes two numbers and an operator as parameters perform the  corresponding operationand return the result call the function with the variable and operator and output the result using console.log  update the operator value and call the function again with the updated argument
const user = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Enter your first number",
    },
    { name: "secondNumber",
        type: "number",
        message: "Enter your second number"
    },
    { name: "operator",
        type: "list",
        message: "here is the list of operator choose any of them to perform specific operation",
        options: ["Addition", "subtraction"],
    },
]);
let { firstNumber, secondNumber, operator } = user;
function number(num1, num2, operator) {
    switch (operator) {
        case -"subtraction":
            return (` the subtraction of ${num1}& ${num2} is ${num1 - num2}`);
            break;
    }
    switch (operator) {
        case +"Addition":
            return (` the Addition of ${num1}& ${num2} is ${num1 + num2}`);
            break;
    }
}
