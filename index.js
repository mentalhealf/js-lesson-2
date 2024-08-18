// // Lesson 2

// const x = 11;
// const y = 5;
// const z = 10;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// let value = 5;
// // hard version: value = value + 10;
// //easy version:  value += 10;
// console.log(value);

// const x = 5;
// const y = 10;
// const z = 5;
// console.log("x > y:", x > y);
// console.log("x < y:", x < y);
// console.log("x === y:", x === z);

// const valueA = "5";
// console.log(valueA);
// console.log(Number(valueA));

// const valueB = "hi";
// console.log(valueB);
// console.log(Number(valueB));

// console.log(typeof Number(valueB));


// console.log(Number.parseInt("55.5px"));

// console.log(Number.parseFloat("55.55px"));

// const validNumber = Number("23");
// console.log(Number.isNaN(validNumber));

// const invalidNumber = Number("Hello");
// console.log(Number.isNaN(invalidNumber));


// // Lesson 3

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);

// Object math // Lesson 3

console.log(Math.floor(1.7));
// Writes the smallest whole number

console.log(Math.ceil(1.1));
// Writes the bigest whole number

console.log(Math.round(1.7));
// Rounds to nearest number

console.log(Math.max(10,20,30,52,41));
// Writes the bigest number out of them

console.log(Math.min(20,23,89,3,33))
// Writes the smalest number out of them

console.log(Math.pow(4,5));
// Writes in lader

console.log(Math.random());
// Writes random number from 0 to 1

const randomNumber = Math.random(); // Генерує випадкове число між 0 і 1
const roundedNumber = Math.round(randomNumber * 10); // Округлює до найближчого цілого числа
console.log(roundedNumber);
