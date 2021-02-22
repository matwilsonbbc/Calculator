const readline = require('readline-sync');

console.log('Welcome to the calculator')

console.log ('\nPlease enter the first number:');
const firstArgument = readline.prompt()
const firstNumber = firstArgument

console.log ('\nPlease enter the second number:');
const seondArgument = readline.prompt()
const secondNumber = seondArgument

const answer = (firstNumber * secondNumber)

console.log ('\nThe answer is ' + answer)