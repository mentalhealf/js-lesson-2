// // // Lesson 2

// // const x = 11;
// // const y = 5;
// // const z = 10;
// // console.log(x + y);
// // console.log(x - y);
// // console.log(x * y);
// // console.log(x / y);
// // console.log(x % y);

// // let value = 5;
// // // hard version: value = value + 10;
// // //easy version:  value += 10;
// // console.log(value);

// // const x = 5;
// // const y = 10;
// // const z = 5;
// // console.log("x > y:", x > y);
// // console.log("x < y:", x < y);
// // console.log("x === y:", x === z);

// // const valueA = "5";
// // console.log(valueA);
// // console.log(Number(valueA));

// // const valueB = "hi";
// // console.log(valueB);
// // console.log(Number(valueB));

// // console.log(typeof Number(valueB));

// // console.log(Number.parseInt("55.5px"));

// // console.log(Number.parseFloat("55.55px"));

// // const validNumber = Number("23");
// // console.log(Number.isNaN(validNumber));

// // const invalidNumber = Number("Hello");
// // console.log(Number.isNaN(invalidNumber));

// // // Lesson 3

// // console.log(0.1 + 0.2 === 0.3);
// // console.log(0.1 + 0.2);

// // Object math // Lesson 3

// console.log(Math.floor(1.7));
// // Writes the smallest whole number

// console.log(Math.ceil(1.1));
// // Writes the bigest whole number

// console.log(Math.round(1.7));
// // Rounds to nearest number

// console.log(Math.max(10,20,30,52,41));
// // Writes the bigest number out of them

// console.log(Math.min(20,23,89,3,33))
// // Writes the smalest number out of them

// console.log(Math.pow(4,5));
// // Writes in lader

// console.log(Math.random());
// // Writes random number from 0 to 1

// const randomNumber = Math.random(); // Генерує випадкове число між 0 і 1
// const roundedNumber = Math.round(randomNumber * 10); // Округлює до найближчого цілого числа
// console.log(roundedNumber);

// // Lesson 4

// const message = "javascript " + "Alex" + " HTML/CSS";
// console.log(message);

// let result;
// result = 5 + 20;
// console.log(result);

// let result2;
// result2 = 5 + "5" + 5;
// console.log(result2);

// let

// // Lesson 4.1

// const message = " Apple 25";
// console.log(message);
// console.log(message.length);
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());
// console.log(message.indexOf("x"));
// console.log(message.includes("Pear"));
// console.log(message.startsWith("A"));
// console.log(message.endsWith("l"));
// console.log(message.padEnd(22, "!"));
// console.log(message.padStart(21, "!"));
// console.log(message.trim());

// // Lesson 4.2

// const myName = "Alex";
// const age = 12;
// const mood = "happy";
// const message = `Hi my name is ${myName}, i am ${age} year's old and I'm feeling ${mood} today.`;
// console.log(message);

// // Lesson 4.3: mini task

//Напиши скрипт який виведе рядок в форматі: “Гість x y поселяється в n номер g”,
// підставивши замість x, y, n, g значення змінних.

// const guestName = "Alex";
// const guestLastName = "Lysov"
// const hotelName = "ZaZa"
// const hotelRoom = "212"
// const message = `Guest ${guestName} ${guestLastName} checking in to his hotel room number ${hotelRoom} in ${hotelName} hotel.`
// console.log(message);

// // Lesson 5

// let groupName = "FE_1y_25_02_09_23";
// let studentsNumber = 8;
// let studentsNumberNow = 6;
// let subjectIt = "FrontEnd";
// let groupMood = "Joyfull";
// let message = `Hello our group is called ${groupName} we have ${studentsNumber} right now we have ${studentsNumberNow}.We are studying on subject called ${subjectIt}, the mood of the group is ${groupMood}.`
// console.log(message);

// Lesson 6

// const num = 50;
// const result = num > 10 && num < 30;
// console.log(num);
// console.log(result);

// && = and

// const num = 5;
// const result = num < 4 || num > 10;
// console.log(num);
// console.log(result);

// || finds first true answere

// console.log(!true);
// console.log(!false);
// console.log(!1);
// console.log(!0);

// ! makes the opiste of what  you writed

// Lesson 6.1

// let cost = 0;
// const subcribtion = "pro";

// if (subcribtion === "normal") {
//     cost = "100$";
// }

// console.log(cost);

// let cost = 0;
// let freeSubcrition = "Free Subscribtion"
// let proSubcribtion = "Pro Subscription"
// let deluxeSubscribtion = "Deluxe Subscribtion"
// let deluxeProSubscribtion = "Deluxe-Pro Subscribtion"

// if (proSubcribtion === "Free Subscribtion") {
//     cost = 0;
//     console.log(`You have singned up for using ${freeSubcrition}.`);

// } else {
//     console.log(`You dont have any subscriptions`);
// }

// let cost;
// const subscription = 'premium';

// if (subscription === 'premium') {
//   cost = 0;
//   console.log(`You have a Free subscription`);

// } else if (subscription === '{Pro') {
//   cost = 100;
//   console.log(`You have Pro subscription`);

// } else if (subscription === 'Premium-Pro') {
//   cost = 500;
//   console.log(`You have Premium-Pro subscription`);

// } else {
//   console.log(`You are not signed up for any subscriptions, please sign up for one of the subscriptions.`);
// }

// console.log(cost); // 500

// Lesson 6.2

// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// const age = 15;
// const type = age >= 18 ? "Adult" : "Child";
// console.log(type);

// Lesson 7

//Опис задачі:

//1. Програма повинна попросити користувача ввести номер дня тижня (ціле число від 1 до 7) за допомогою `prompt`.
//2. Використовуючи інструкцію `switch`, програма має порівняти введений номер з можливими значеннями від 1 до 7 і призначити відповідну назву дня тижня:
// - 1 — Понеділок
// - 2 — Вівторок
/// - 3 — Середа
// - 4 — Четвер
// - 5 — П'ятниця
//  - 6 — Субота
//- 7 — Неділя

//3. Якщо користувач вв
//3. Якщо корист
///3. Якщо користувач вводить значення поза діапазоном від 1 до 7, програма повинна вивести повідомлення "Невірний номер дня".
//4. Результат повинен виводитися в консоль:
//   - Наприклад, якщо користувач вводить "3", у консолі з'явиться повідомлення: "Вибрано день: Середа" і "Назва дня: Середа".
//- Якщо введено число поза діапазоном, наприклад, "10", у консолі з'явиться повідомлення: "Невірний номер дня".
//Програма повинна бути зручною та враховувати можливі помилки введення з боку користувача.

// let day = parseInt(prompt("Enter number of the day"));

// switch (day) {
//   case 1:
//     alert("Chosen day monday");
//     break;
//   case 2:
//     alert("Chosen day tuesday");
//     break;
//   case 3:
//     alert("Chosen day wednesday");
//     break;
//   case 4:
//     alert("Chosen day thursday");
//     break;
//   case 5:
//     alert("Chosen day friday");
//     break;
//   case 6:
//     alert("Chosen day saturday");
//     break;
//   case 7:
//     alert("Chosen day sunday");
//     break;
//     default:alert("Wrong day number. Please try again later")
// };

// Lesson 8
// let clubNumber = parseInt(prompt("How old are you:"));
// switch (true) {
//   case clubNumber >= 18:
//     alert("allowed");
//     break;
//   default:
//     alert("not allowed");
//     break;
// }

// let nazarNumber = parseInt(prompt("how old are you:"));
// switch (true) {
//   case nazarNumber >= 18:
//     alert("welcome to our Night-Club");
//     break;
//   default:
//     alert("Not welcome to our Night-Club");
//     break;
// }



let blockA = "block a";

if(blockA === "block a"){
    console.log("block a")
    let blockB =  "block b"
    console.log(blockB);

}
let blockC = "block c";
console.log(blockC);
