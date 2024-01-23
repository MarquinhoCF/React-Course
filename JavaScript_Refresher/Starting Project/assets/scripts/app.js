// import * as util from "./util.js";

// console.log(util.default);
// console.log(util.apiKey);
// console.log(util.abc);

// import apiKeyDefault from "./util.js";
// import { apiKey, abc } from "./util.js";

// console.log(apiKeyDefault);
// console.log(apiKey);
// console.log(abc);

// import { apiKey, abc as content } from "./util.js";

// console.log(content);

// const principalMessage = "Hello!";
// let userMessage = "Hello World!";

// console.log(principalMessage);
// console.log(userMessage);

// console.log("Hello" + " " + "World" + "!");

// console.log(15 < 56);

// if (10 == 10) {
//     console.log("It works!")
// }

// function greet(userName, message = "Hello!") {
//     return "Hi, I am " + userName + ". " + message;
// }

// const greeting1 = greet("Marcos");
// console.log(greeting1);

// const greeting2 = greet("Manuel", "Hello, What's up!");
// console.log(greeting2);

// export default function(userName, message = "Hello!") {
//     return "Hi, I am " + userName + ". " + message;
// }

// const user = {
//     name: 'Max', 
//     age: 34,
//     greet() {
//         console.log('Hello!');
//         console.log(this.age);
//     }
// };

// console.log(user);
// user.greet();

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log('Hi!')
//     }
// }

// const user1 = new User('Manuel', 30);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);
// console.log(hobbies[1]);
// console.log(hobbies[2]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Working");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({text: item}));
// console.log(editedHobbies);

// const userNameData = ["Max", "Schawarzmüller"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// const [firstName, lastName] = ["Max", "Schawarzmüller"];

// console.log(firstName);
// console.log(lastName);

// const user = {
//     name: "Max",
//     age: 34,
// }

// const name = user.name;
// const age = user.age;

// const {name: userName, age: userAge} = {
//     name: "Max",
//     age: 34,
// };

// console.log(userName);
// console.log(userAge);

// const hobbies = ["Sports", "Cooking"];
// const user = {
//     name: "Max",
//     age: 34,
// }

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendUser = {
//     isAdmin: true,
//     ...user
// }

// console.log(extendUser);

// const password = prompt('Your password');

// if (password === "Hello") {
//     console.log("Hello works");
// } else if(password === "hello") {
//     console.log("hello works");
// } else {
//     console.log("Access not granted.");
// }

// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//     console.log(hobby);
// }

// const list = document.querySelector('ul');
// list.remove();

// function handleTimeout() {
//     console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//     console.log("Timed out ... again!");
// }

// setTimeout(handleTimeout, 5000);
// setTimeout(handleTimeout2, 10000);
// setTimeout(() => {
//     console.log("More timing out...");
// }, 15000);

// function greeter(greetFn) {
//     greetFn();
// }

// greeter(() => console.log("Hi"));

// function init() {
//     function greet() {
//         console.log("Hi!")
//     }

//     greet();
// }

// init();

// let userMessage = 'Hello';
// userMessage = userMessage.concat("!!!");

const hobbies = ["Sports", "Cooking"];
hobbies.push("Working");
console.log(hobbies);