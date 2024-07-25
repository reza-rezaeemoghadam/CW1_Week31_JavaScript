// let userNumber = prompt("لطفاً یک عدد وارد کنید:");
let userNumber = +prompt("لطفاً یک عدد وارد کنید:");
let num = Number(userNumber);
let negative = +("-" + userNumber);
let power2 = num ** 10;
let power = Math.pow(num, 10);
let booleanValue = Boolean(num);
let booleanValue2 = !!num;
let dataType = typeof userNumber;

console.log(num);
console.log(negative);
console.log(power);
console.log(power2);
console.log(booleanValue);
console.log(booleanValue2);
console.log(dataType);
