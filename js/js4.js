let firstValue = prompt("Insert FirstValue:");
let secondValue = prompt("Insert SecondValue:");

console.log(secondValue);
console.log(firstValue);
// First Approche
// console.log("FirstValue:"+firstValue)
// console.log("SecondValue:"+secondValue)

// firstArray = firstValue.split("")
// secondArray = secondValue.split("")

// console.log(firstArray)
// console.log(secondArray)

// firstArray.reverse()
// secondArray.reverse()

// console.log(firstArray)
// console.log(secondArray)

// console.log(firstArray.join(""))
// console.log(secondArray.join(""))

// Second Approche
console.log(firstValue.split("").reverse().join(""));
console.log(secondValue.split("").reverse().join(""));
