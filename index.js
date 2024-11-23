// // // // Lesson 2

// // // const x = 11;
// // // const y = 5;
// // // const z = 10;
// // // console.log(x + y);
// // // console.log(x - y);
// // // console.log(x * y);
// // // console.log(x / y);
// // // console.log(x % y);

// // // let value = 5;
// // // // hard version: value = value + 10;
// // // //easy version:  value += 10;
// // // console.log(value);

// // // const x = 5;
// // // const y = 10;
// // // const z = 5;
// // // console.log("x > y:", x > y);
// // // console.log("x < y:", x < y);
// // // console.log("x === y:", x === z);

// // // const valueA = "5";
// // // console.log(valueA);
// // // console.log(Number(valueA));

// // // const valueB = "hi";
// // // console.log(valueB);
// // // console.log(Number(valueB));

// // // console.log(typeof Number(valueB));

// // // console.log(Number.parseInt("55.5px"));

// // // console.log(Number.parseFloat("55.55px"));

// // // const validNumber = Number("23");
// // // console.log(Number.isNaN(validNumber));

// // // const invalidNumber = Number("Hello");
// // // console.log(Number.isNaN(invalidNumber));

// // // // Lesson 3

// // // console.log(0.1 + 0.2 === 0.3);
// // // console.log(0.1 + 0.2);

// // // Object math // Lesson 3

// // console.log(Math.floor(1.7));
// // // Writes the smallest whole number

// // console.log(Math.ceil(1.1));
// // // Writes the bigest whole number

// // console.log(Math.round(1.7));
// // // Rounds to nearest number

// // console.log(Math.max(10,20,30,52,41));
// // // Writes the bigest number out of them

// // console.log(Math.min(20,23,89,3,33))
// // // Writes the smalest number out of them

// // console.log(Math.pow(4,5));
// // // Writes in lader

// // console.log(Math.random());
// // // Writes random number from 0 to 1

// // const randomNumber = Math.random(); // Генерує випадкове число між 0 і 1
// // const roundedNumber = Math.round(randomNumber * 10); // Округлює до найближчого цілого числа
// // console.log(roundedNumber);

// // // Lesson 4

// // const message = "javascript " + "Alex" + " HTML/CSS";
// // console.log(message);

// // let result;
// // result = 5 + 20;
// // console.log(result);

// // let result2;
// // result2 = 5 + "5" + 5;
// // console.log(result2);

// // let

// // // Lesson 4.1

// // const message = " Apple 25";
// // console.log(message);
// // console.log(message.length);
// // console.log(message.toLowerCase());
// // console.log(message.toUpperCase());
// // console.log(message.indexOf("x"));
// // console.log(message.includes("Pear"));
// // console.log(message.startsWith("A"));
// // console.log(message.endsWith("l"));
// // console.log(message.padEnd(22, "!"));
// // console.log(message.padStart(21, "!"));
// // console.log(message.trim());

// // // Lesson 4.2

// // const myName = "Alex";
// // const age = 12;
// // const mood = "happy";
// // const message = `Hi my name is ${myName}, i am ${age} year's old and I'm feeling ${mood} today.`;
// // console.log(message);

// // // Lesson 4.3: mini task

// //Напиши скрипт який виведе рядок в форматі: “Гість x y поселяється в n номер g”,
// // підставивши замість x, y, n, g значення змінних.

// // const guestName = "Alex";
// // const guestLastName = "Lysov"
// // const hotelName = "ZaZa"
// // const hotelRoom = "212"
// // const message = `Guest ${guestName} ${guestLastName} checking in to his hotel room number ${hotelRoom} in ${hotelName} hotel.`
// // console.log(message);

// // // Lesson 5

// // let groupName = "FE_1y_25_02_09_23";
// // let studentsNumber = 8;
// // let studentsNumberNow = 6;
// // let subjectIt = "FrontEnd";
// // let groupMood = "Joyfull";
// // let message = `Hello our group is called ${groupName} we have ${studentsNumber} right now we have ${studentsNumberNow}.We are studying on subject called ${subjectIt}, the mood of the group is ${groupMood}.`
// // console.log(message);

// // Lesson 6

// // const num = 50;
// // const result = num > 10 && num < 30;
// // console.log(num);
// // console.log(result);

// // && = and

// // const num = 5;
// // const result = num < 4 || num > 10;
// // console.log(num);
// // console.log(result);

// // || finds first true answere

// // console.log(!true);
// // console.log(!false);
// // console.log(!1);
// // console.log(!0);

// // ! makes the opiste of what  you writed

// // Lesson 6.1

// // let cost = 0;
// // const subcribtion = "pro";

// // if (subcribtion === "normal") {
// //     cost = "100$";
// // }

// // console.log(cost);

// // let cost = 0;
// // let freeSubcrition = "Free Subscribtion"
// // let proSubcribtion = "Pro Subscription"
// // let deluxeSubscribtion = "Deluxe Subscribtion"
// // let deluxeProSubscribtion = "Deluxe-Pro Subscribtion"

// // if (proSubcribtion === "Free Subscribtion") {
// //     cost = 0;
// //     console.log(`You have singned up for using ${freeSubcrition}.`);

// // } else {
// //     console.log(`You dont have any subscriptions`);
// // }

// // let cost;
// // const subscription = 'premium';

// // if (subscription === 'premium') {
// //   cost = 0;
// //   console.log(`You have a Free subscription`);

// // } else if (subscription === '{Pro') {
// //   cost = 100;
// //   console.log(`You have Pro subscription`);

// // } else if (subscription === 'Premium-Pro') {
// //   cost = 500;
// //   console.log(`You have Premium-Pro subscription`);

// // } else {
// //   console.log(`You are not signed up for any subscriptions, please sign up for one of the subscriptions.`);
// // }

// // console.log(cost); // 500

// // Lesson 6.2

// // let type;
// // const age = 20;

// // if (age >= 18) {
// //   type = 'adult';
// // } else {
// //   type = 'child';
// // }

// // const age = 15;
// // const type = age >= 18 ? "Adult" : "Child";
// // console.log(type);

// // Lesson 7

// //Опис задачі:

// //1. Програма повинна попросити користувача ввести номер дня тижня (ціле число від 1 до 7) за допомогою `prompt`.
// //2. Використовуючи інструкцію `switch`, програма має порівняти введений номер з можливими значеннями від 1 до 7 і призначити відповідну назву дня тижня:
// // - 1 — Понеділок
// // - 2 — Вівторок
// /// - 3 — Середа
// // - 4 — Четвер
// // - 5 — П'ятниця
// //  - 6 — Субота
// //- 7 — Неділя

// //3. Якщо користувач вв
// //3. Якщо корист
// ///3. Якщо користувач вводить значення поза діапазоном від 1 до 7, програма повинна вивести повідомлення "Невірний номер дня".
// //4. Результат повинен виводитися в консоль:
// //   - Наприклад, якщо користувач вводить "3", у консолі з'явиться повідомлення: "Вибрано день: Середа" і "Назва дня: Середа".
// //- Якщо введено число поза діапазоном, наприклад, "10", у консолі з'явиться повідомлення: "Невірний номер дня".
// //Програма повинна бути зручною та враховувати можливі помилки введення з боку користувача.

// // let day = parseInt(prompt("Enter number of the day"));

// // switch (day) {
// //   case 1:
// //     alert("Chosen day monday");
// //     break;
// //   case 2:
// //     alert("Chosen day tuesday");
// //     break;
// //   case 3:
// //     alert("Chosen day wednesday");
// //     break;
// //   case 4:
// //     alert("Chosen day thursday");
// //     break;
// //   case 5:
// //     alert("Chosen day friday");
// //     break;
// //   case 6:
// //     alert("Chosen day saturday");
// //     break;
// //   case 7:
// //     alert("Chosen day sunday");
// //     break;
// //     default:alert("Wrong day number. Please try again later")
// // };

// // Lesson 8
// // let clubNumber = parseInt(prompt("How old are you:"));
// // switch (true) {
// //   case clubNumber >= 18:
// //     alert("allowed");
// //     break;
// //   default:
// //     alert("not allowed");
// //     break;
// // }

// // let nazarNumber = parseInt(prompt("how old are you:"));
// // switch (true) {
// //   case nazarNumber >= 18:
// //     alert("welcome to our Night-Club");
// //     break;
// //   default:
// //     alert("Not welcome to our Night-Club");
// //     break;
// // }



// // let blockA = "block a";

// // if(blockA === "block a"){
// //     console.log("block a")
// //     let blockB =  "block b"
// //     console.log(blockB);

// // }
// // let blockC = "block c";
// // console.log(blockC);


// // Lesson 9
// // let counter = 0;

// // while (true) {
// //     console.log("Цей цикл буде працювати вічно!");
// //   }

// // let clientCounter = 18;
// // const maxClients = 25;


// // while (clientCounter < maxClients) {
// //   console.log(clientCounter);
// //   clientCounter += 1;
// // }

// // for (let i = 0; i <= target; i += 1) {
// //   sum += i;
// // }
// // console.log(sum);


// // Lesson 10
// // let initialAmount = 1000;  // початкова сума в грн
// // let monthlyContribution = 200;  // щомісячний внесок у грн
// // let interestRate = 0.02;  // 2% щомісячна відсоткова ставка
// // let months = 12;  // кількість місяців

// // for (let i = 1; i <= months; i++) {
// //   initialAmount += monthlyContribution;  // додаємо щомісячний внесок
// //   initialAmount += initialAmount * interestRate;  // додаємо відсотки
// //   console.log(`Місяць ${i}: ваш баланс становить ${initialAmount.toFixed(2)} грн`);
// // }


// // Lesson 11

// // const fruits = ["apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango","apple", "orange", "Dragon fruit", "Mango",];
// // console.log(fruits);
// // console.log(fruits[4]);
// // fruits[0] = "lemon";
// // console.log(fruits);
// // fruits.length = 5;
// // console.log(fruits.length);

// // const clients = ['Mango', 'Ajax', 'Poly'];

// // for (let i = 0; i < clients.length; i += 1) {
// //   console.log('Logging clients: ', clients[i]);
// // };


// // const numbers = [];
// // for (let i = 0; i < 3; i += 1) {
// //   numbers.push(`label-${i}`);
// // };
// // console.log('numbers: ', numbers);


// // Ітерація по масиву
// // const clients = ['Mango', 'Ajax', 'Poly'];

// // for (const client of clients) {
// //   console.log(client);
// // };

// // const string = 'javascript';
// // for (const character of string) {
// //   console.log(character);
// // }


// // const clients = ['Mango', 'Poly', 'Ajax'];
// // const clientNameToFind = 'Poly';
// // let message;
// // for (const client of clients) {
// //   /* На кожній ітерації ми будемо перевіряти чи збігається елемент масиву з ім'ям клієнта. Якщо збігається то ми записуємо в message повідомлення про успіх і робимо break щоб не шукати далі */
// //   if (client === clientNameToFind) {
// //     message = 'Клієнт з таким іменем є в базі даних!';
// //     break;
// //   }
// //   // Якщо вони не збігаються то запишемо в resultMsg повідомлення про відсутність імені
// //   message = 'Клієнта з таким іменем немає в базі даних!';
// // }
// // console.log(message);


// /* Для чисел менше ніж поріг спрацьовує continue, виконання тіла припиняється і управління передається на наступну ітерацію. */
// // const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// // const threshold = 15;


// // for (let i = 0; i < numbers.length; i += 1) {
// //   if (numbers[i] < threshold) {
// //     continue;
// //   }


// //   console.log(`Число більше ніж ${threshold}: ${numbers[i]}`); // 18, 29, 34
// // };


// // const matrix = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ]; 
// // console.log(matrix[0][0]); // 1
// // console.log(matrix[1][2]); // 6
// // console.log(matrix[2][2]); // 9

// // Lesson 12

// // const message = 'Welcome to Dunmow';
// // console.log(message.split(' '));

// // const clients = ['Mango', 'Poly', 'Ajax'];
// // console.log(clients.join(' '));


// // const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// // console.log(clients.indexOf('Poly'));

// // const fruit = 'apple';
// // if (fruit === 'apple' || fruit === 'strawberry') {
// //   console.log('It is a red fruit!');
// // }

// // const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// // const fruit = 'cherry';

// // if (redFruits.includes(fruit)) {
// //   сonsole.log('It is a red fruit!');};

// // const stack = [];
// // stack.push(9,4,90000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
// // stack.push(2);
// // console.log(stack);
// // stack.push(3);
// // console.log();

// // const clients = ['Mango', 'Ajax', 'Poly'];
// // console.log(clients.shift());
// // console.log(clients);
// // clients.unshift('Kiwi');


// // Lesson 13

// // const vegetables = ["potato", "carot", "pumpkin", "tomato"];
// // console.log(vegetables.slice(4, 4));

// // const vegetables = ["potato", "carot", "pumpkin", "tomato"];
// // const deletedVegetables = vegetables.splice(2,3);
// // console.log(vegetables);
// // console.log(deletedVegetables);

// // Lesson 14 mini
// // a, b, c це параметри
// // const add = function(a, b, c) {
// //     return a + b + c;
// //   }; 

// //   // 1, 2, 3 це аргументи
// //   const result = add(1, 2, 3);
// //   console.log(result); // 6

// //    // 5, 10, 15 це аргументи
// //   console.log(add(5, 10, 15)); // 30

// // Skiped lesson 15

// // Lesson 16
// const filter = function (array, test) {
//   const filteredElements = [];


//   for (const element of array){
//     const passed = test(element);
//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];



// const Manyfruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },  { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// console.log(Manyfruits);
// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits);

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity);

// // Lesson 17

// const add = (a, b, c)=> a + b + c;


// const bar = function () {
//   console.log('bar');
// };

// const baz = function () {
//   console.log('baz');
// };

// const foo = function () {
//   console.log('foo');
//   bar();
//   baz();
// };

// foo();

// // ЗАДАЧА

// // Напишіть функцію, яка повертає новий масив, в якому всі елементи масиву помножені на задане число, з використанням колбек-функції

// function multiplyArray(arr, multiplier) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * multiplier);
//   }
//   return result;
// }

// const numbers = [1, 2, 3, 4, 5];
// const multipliedArray = multiplyArray(numbers, 2);

// Lesson 18

// const school = {
//   name: "SchoolHellForcer",
//   hall: 240,
//   numOFStudents: "1.3k",
//   moneyNotSpendOnStudents: "213123131231231231231$",
//   ForcedNumOFStudents: "1299",
//   studentsThatAgredExist:true,
  
  

//   showName() {
//     console.log(this.name);    
//   },
//   upDatedNumOfStudents(value) {
  
//     console.log();
    
//   }







// }

// console.log(school);
// console.log(school.name);

// school.theme = Hell
// console.log(school.theme);

// console.log(school);

// school.kickedOutPupils = ["Georg", "Lilly", "Mango", "Borris", "Alexa"]
// console.log(school);

// school.showName();
// school.upDatedNumOfStudents(1308);
// console.log(school.numOFStudents);


// Lesson 19

// const hotel ={
//   name: "Springtraper",
//   room: 20,
//   traps:true,
//   arcade:true,
//   arcadeMachines: 12,

// }

// console.log(hotel);


// Lesson 20



// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]

// for (const key of keys) {
//   console.log('Value: ', hotel[key]);
// }

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const completeHouses = [...houses, 'Targaryen'];

// console.log(houses);
// console.log(completeHouses);


// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };


// const c = Object.assign({}, a, b);
// console.log(c);
// Діма Берестень
// 18:10
// const d = { ...a, ...b };
// console.log(d);


 
// let a = 5;
// let b = a;
// console.log(a);


// let a = 5;
// let b = a;
// console.log(a);

// a.push('Poly');
// console.log(a);

// console.log(b);
// b.push('Ajax');
//   console.log(a);





// Lesson 21

// const restourant = {
//   name: "Slim-Street",
//   numberOfDiferentFoods: 123,
//   maxVisitors: 321,
//   onlyOneCookCheff: false,
//   itsARestourant: true,
// }
 
// const values = Object.values(restourant);

// const keys = Object.keys(restourant);

// const entries = Object.entries(restourant);

// for (const key in restourant) {
//   console.log('Keys: ', keys);
// }

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const completeHouses = [...houses, 'Targaryen'];


// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(completeHouses);


// const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
//   const secondBatch = ['Stark', 'Lannister', 'Tyrell'];
//  v
//   const houses = [...firstBatch, ...secondBatch];

//   console.log(houses);
  

//   const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };


// const c = Object.assign({}, a, b);
// console.log(c);


// const d = { ...a, ...b };
// console.log(d);



// const a = ['Mango'];
//   // Присвоєння за посиланням.
//   // Оскільки a це масив, в b записується посилання на вже існуючий
//   // масив в пам'яті. Тепер a і b вказують на один і той же масив.
//   const b = a;
//   console.log(a); // ['Mango']
//   console.log(b); // ['Mango']
 
//   // Змінимо масив, додавши ще один елемент, використовуючи покажчик з a
//   a.push('Poly');
//   console.log(a);
 
// TASK 1

// Створіть об'єкт "product" з властивостями "name", "price" та "quantity". Додайте до об'єкту метод,
// який буде розраховувати вартість всіх товарів. Результат повинен бути виведений на екран.


// const products = {
//   names: {
//     siphon: 6,
//     shirts: 3,
//     batons: 4,
//     pants: 7,
//   },
//   quality: "good",
//   price: "8.23$",
// };

// const values = Object.values(products); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }
// for (const value of values) {
//   total += value;
// }

// console.log(total);
// console.log(quality);

// Lesson 22

// const motel = {
//   name: "Shift-Motel",
//   room: 12,
//   statusIsInWork: true,
//   buffet: false,
// };

// const {name, ...rest} = motel;

// console.log(rest);

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// // деструктуризація разбита на декілька рядків для розуміння
// const {
//   size: { // покладемо size сюди
//     width,
//     height
//   },
//   items: [item1, item2], // додамо елементи до items
//   title = "Menu" // відсутня в об'єкті (використовується значення за замовчуванням)
// } = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200
// console.log(item1);  // Cake
// console.log(item2);  // Donut


// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;
// console.log(red, green, blue);
// console.log(rgb);




// const rgb = [200, 255, 100];


// const [red, ...colors] = rgb;


// console.log(`Red: ${red}, Colors: ${colors}`);


// Lesson 23

// const user = {
//     name: 'John',
//     age: 30,
//     email: 'john@example.com'
//   }

//   const {name, age, email} = user;
//   console.log(name, age, email);


//   const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     features: ['power windows', 'rear camera', 'navigation'],
//     safety: {
//       airbags: true,
//       antilock_brakes: true,
//       stability_control: true
//     }
//   }

//   const {make, model, year, features:[feature1, feature2, feature3] , safety:{airbags, antilock_brakes, stability_control}} = car;
//   console.log(car);
//   console.log(airbags);
//   console.log(feature2);
//   console.log(make, model, year, features, safety);
  

// const movie = {
//     title: 'The Shawshank Redemption',
//     director: {
//       name: 'Frank Darabont',
//       nationality: 'American'
//     },
//     actors: ['Tim Robbins', 'Morgan Freeman'],
//     release_year: 1994,
//     ratings: {
//       imdb: 9.3,
//       rotten_tomatoes: 90
//     }
//   }


// const {title, ratings:{imdb, rotten_tomatoes}, release_year, actors: [actor1, actor2], director:{name, nationality}} = movie

// console.log(rotten_tomatoes, release_year, title, actor2,);


//Lesson 24

// 1
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];


// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers);

// const numbers = [ 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => {
//   return value > 3;
// });


// console.log(filteredNumbers);

// const numbers = [1, 2, 3];


// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }


// // Функціональний forEach
// numbers.forEach(num => console.log(num));


// // Вказуємо параметр idx якщо потрібен доступ до лічильника
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));


//Lesson 25

// const numbers = [1, 2, 3];


// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }


// Функціональний forEach
// numbers.forEach(num => console.log(num));

// const numbers = [1, 2, 3];


// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers);

// const fruits = [


//   {name: "Mango",isavailable: true },
//   {name: "Apple", isavailable: true},
//   {name: "Dragonf-fruit", isavailable:false}

// ]

// const names = fruits.map(fruit => fruit.name);

// console.log(names);

// fruits.forEach(fruit => console.log(fruit));

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// console.log(numbers.find(num => num > 5));


// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // every поверне true тільки якщо всіх фруктів буде більше ніж 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false
// 77
// // some поверне true якщо хоча б одного фрукта буде більше ніж 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0);

//Lesson 26

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);


//     return allTags;
//   }, []);

// const tags = getTags(tweets);
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }


//   acc[tag] += 1;


//   return acc;
// };


// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const numbers = [2, 1, 4, 3, 5];

// console.log('Before sort: ', numbers); 
// console.log('After sort: ', numbers.sort());

// const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey', 'Alex'];

// console.log('Before sort: ', clients); 
// console.log('After sort: ', clients.sort());

// // Lesson 27
// class User {
//     constructor(name, email) {
//       this.name = name; 
//       this.email = email;
//     }
  
//     sayHello() {
//       console.log(`Привіт, мене звати ${this.name}, моя пошта: ${this.email}`);
//     }
//   }
//   const mango = new User('Mango', 'mango@example.com');
//   console.log(mango);
//   mango.sayHello();
  
//   const poly = new User('Poly', 'poly@example.com');
//   console.log(poly); 
//   poly.sayHello();

//   const Alex = new User('Alex', 'Alex@example.com');
//   console.log(Alex); 
//   poly.sayHello();

//   class User {
//     constructor(name, email) {
//       this.name = name; // Ім'я користувача
//       this.email = email; // Пошта користувача
//     }
  
//     // Метод для привітання
//     sayHello() {
//       console.log(`Привіт, мене звати ${this.name}, моя пошта: ${this.email}`);
//     }
  
//     // Метод для оновлення імені
//     updateName(newName) {
//       this.name = newName;
//       console.log(`Ім'я оновлено на: ${this.name}`);
//     }
  
//     // Метод для оновлення пошти
//     updateEmail(newEmail) {
//       this.email = newEmail;
//       console.log(Пошта онов
//      console.log(`Пошта оновлена на: ${this.email}`);
//     }
//   }
  
//   // Створення екземплярів класу
//   const mango = new User('Mango', 'mango@example.com');
//   console.log(mango);
//   mango.sayHello();
  
//   // Оновлюємо ім'я та пошту для Mango
//   mango.updateName('Mango Updated');
//   mango.updateEmail('updated_mango@example.com');
//   mango.sayHello();
  
//   const poly = new User('Poly', 'poly@example.com');
//   console.log(poly);
//   poly.sayHello();
  
//   // Оновлюємо пошту для Poly
//   poly.updateEmail('new_poly@example.com');
//   poly.sayHello();

  class Car {
    constructor(make, model, year) {
      this.make = make; // Марка автомобіля
      this.model = model; // Модель автомобіля
      this.year = year; // Рік випуску
    }
  
    // Метод для виводу інформації про автомобіль
    displayInfo() {
      console.log(Автомобіль: ${this.make} ${this.model}, ${this.year} року);
    }
  
    // Метод для оновлення моделі автомобіля
    updateModel(newModel) {
      this.model = newModel;
      console.log(Модель оновлена на: ${this.model});
    }
  
    // Метод для оновлення року випуску
    updateYear(newYear) {
      this.year = newYear;
      console.log(Рік випуску оновлено на: ${this.year});
    }
  }
  
  // Створення екземплярів класу
  const car1 = new Car('Toyota', 'Camry', 2020);
  console.log(car1);
  car1.displayInfo();
  
  // Оновлюємо модель та рік для car1
  car1.updateModel('Corolla');
  car1.updateYear(2022);
  car1.displayInfo();
  
  const car2 = new Car('Honda', 'Civic', 2018);
  console.log(car2);
  car2.displayInfo();
  
  // Оновлюємо рік для car2
  car2.updateYear(2021);
  car2.displayInfo();









