let annualIncome: number = 50000;
let taxRate: number = 0.07;

let taxAmount: number = annualIncome * taxRate;
let netIncome: number = annualIncome - taxAmount;

console.log("--- Tax Calculation Report ---");
console.log('Gross Income: $${annualIncome}');
console.log('Tax Rate: ${taxRate * 100}%');
console.log('Tax Paid: $${taxAmount}');
console.log('Net Income after Tax: $${netIncome}');
console.log("------------------------------");
