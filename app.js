// // DATA TYPES & VARIABLES

// let celcius = 10
// let fahrenheit = celcius * 1.8 + 32

// console.log(fahrenheit)





// // CONDITIONALS

// let cash = 50
// let price = 100
// let difference = cash - price

// if (cash > price) {
//     console.log(`you paid extra - here's ${difference} dollars change`)
// }
// else if (cash === price) {
//     console.log("you paid the exact amount, have a nice day!")
// }
// else {
//     console.log(`not enough money - you still owe ${difference * -1 } dollars`)
// }

// let cash = 50
// let price = 40
// let isStoreOpen = false

// if (cash >= price && isStoreOpen === true) {
//     console.log('print the receipt')
// }

// if (cash >= price || isStoreOpen === true) {
//     console.log('print the receipt')
// }

// // the === isn't needed when comparing a bulion to true & use !isStoreOpen to check if oposite is true
// // (isStoreOpen === false)
// let val = "";

// if (val) {
//     console.log("truthy value", !!val)
// }
// else {
//     console.log("falsy value", !!val)
// }

// let hot = false

// hot ? console.log('weather is hot outside') : console.log('weather is cold')

// let subscribed = false
// let loggedIn = true

// let str = subscribed && loggedIn ? 'show the video' : 'hide the video'
// console.log(str)

// let str = subscribed || loggedIn ? 'show the video' : 'hide the video'
// console.log(str)

// let cash = 50
// let price = 40
// let isStoreOpen = true

// let str = cash >= price && isStoreOpen ? 'give receipt' : 'do not give receipt'
// console.log(str)




// // LOOPS

// let count = 1;

// while (count <= 100) {
//     console.log(count)
//     count = count + 1
// }

// for (let i = 0; i < 100; i++) {
//     console.log(i + 1);
// }

// // Post every number 1-20 and have frontend when divisible by 3,
// // Simplified when divisible by 5, both when divisible by 3 & 5
// // and post each number between

// for (let i = 1; i <= 20; ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log (`${i} -> Frontend Simplified`)
//     }
//     else if (i % 3 === 0) {
//         console.log (`${i} -> Frontend`)
//     }
//     else if (i % 5 === 0) {
//         console.log (`${i} -> Simplified`)
//     }
//     else {
//         console.log(`${i} -> ${i}`)
//     }
// }

// // TASK: Print out every character from the string: Frontend Simplified
// const str = "Frontend Simplified"

// for (let i = 0; i < str.length; ++i) {
//     console.log(str[i])
// }




// FUNCTIONS

// console.log("Welcome to Frontend Simplified, David")
// console.log("Welcome to Frontend Simplified, Bailey")
// console.log("Welcome to Frontend Simplified, Bec")

// Function definition
// function welcomePersonToFES(firstName, lastName) {
//     console.log(`Welcome to Frontend Simplified, ${firstName} ${lastName}`)
// }

// Call the function
// welcomePersonToFES('David', 'Bragg');
// welcomePersonToFES('Bailey', 'Jim');
// welcomePersonToFES('Bec', "lang");

// NOTE ~~ When a function has a return, it doesn't execute anymore code
// function fn () {
//     return 5
//     console.log('my function')
// }
// console.log(5);

// function sumOfTwoNumbers(num1, num2) {  //P
//     return num1 + num2
// }

// console.log(sumOfTwoNumbers (10, 40))  //A

// // 2 Ways to define a function (function vs Const) ~~ Create a functon that concerts Celsius to Fahrenheight
// // #1
// function convertCelsiusToFahrenheit (celcius) {
//     return celcius * 1.8 + 32
// }

// console.log(convertCelsiusToFahrenheit (0))
// console.log(convertCelsiusToFahrenheit (10))
// console.log(convertCelsiusToFahrenheit (30))

// // #2
// const convertCelsiusToFahrenheit = (celcius) => {
//     return celcius * 1.8 + 32
// }

// console.log(convertCelsiusToFahrenheit (0))




// ARRAYS

// let item1 = 20; //<-- Variable
// let item2 = 30;
// let item3 = 40;
// let item4 = 50;
// let item5 = 100;

// let arr = [20, 30, 40, 50, 100]; //<-- Array

// // First element of array:
// console.log(arr[0]);

// // Last element of array:
// console.log(arr[arr.length - 1]);

// // // Add element onto end of array
// arr.push(200)

// console.log(arr)

// // If the filter sees a return true it adds it onto the array
// // eg. empty array [] to begin with, then [20, 30 .., 100] and filter out anything not true

// let newArr = arr.filter((element) => {
//   console.log(element);
//   if (element < 50) {
//     return true;
//   }
// });

// // Shorter version of above
// // 1. don't need () around element because only one variable 2. don't need return if just one element
// let newArr = arr.filter(element => element >= 50)
// console.log(newArr);

// Practice -- Filter out all Fail elements with array.filter & then without
// With filter
// let grades = ["A+", "A", "FAIL"]

// let goodGrades = grades.filter(element => element!== "FAIL")

// console.log(goodGrades)

// // Without filter
// let grades = ["A+", "A", "FAIL"]
// let goodGrades = []
// for (let i = 0; i < grades.length; ++i) {
//   if (grades [i] !== "FAIL") {
//     goodGrades.push(grades[i])
//   }
// }

// console.log(goodGrades);

// // Array Map
// let arr = [1, 4, 9, 16]

// let newArray = arr.map(element => 'dog')

// console.log(newArray)

// // Turn each element in an array of dollars into cents
// // with and without map
// / /#1 WIth
// let dollars = [1, 5, 10, 3]

// let cents = dollars.map((element) => {
//     console.log(element)
//         return element*100;
// })

// console.log(cents)

// // Short version
// let dollars = [1, 5, 10, 3]

// let cents = dollars.map(element => element*100)

// console.log(cents)
// // #2 Without

// let dollars = [1, 5, 10, 3];

// let cents = [];

// for (let i = 0; i < dollars.length; ++i) {
//     cents.push(dollars[i] *100);
// }

// console.log(cents);




// //OBJECTS

// let userFirstName = 'Bailey'
// let userLastName = 'Jones-Carew'
// let userEmail = 'bailey@gmail.com'
// let userDiscord = 'Bailey#007'

// //Better practice below & use commas

// let user = {
//   username: 'Bailey',
//   email: 'bailey@gmail.com',
//   discord: 'Bailey#007',
//   lessonCompleted: [0, 1, 2]
// }

// console.log(user.username)

// console.log(user.email)

// console.log(user.lessonCompleted)
// console.log([0, 1, 2])
// console.log(user.lessonCompleted.map(elem => elem * 3))

// //To store multiple users, we store the objects inside an array
// let users = [
//   {
//     username: "Bailey",
//     email: "bailey@gmail.com",
//     password: "abc123",
//     discord: "Bailey#007",
//     lessonCompleted: [0, 1, 2],
//   },
//   {
//     username: "John",
//     email: "John@gmail.com",
//     password: "123abc",
//     discord: "John#097",
//     lessonCompleted: [0, 1, 2, 3, 4],
//   },
//   {
//     username: "Sam",
//     email: "Sam@gmail.com",
//     password: "password1",
//     discord: "Sam#100",
//     lessonCompleted: [0, 1],
//   },
// ];

// console.log(users[0].lessonCompleted.map(elem => elem * 10))

// // Loop over every object in the users array to
// // check if the users at the current index we are on is the same email & Password
// // Use 'return' to stop looping through the same array once user is found
// function login(email, password) {
//   for (let i = 0; i < users.length; ++i) {
//     if (users[i].email === email) {
//       console.log(users[i]);
//       if (users[i].password === password) {
//         console.log("log the user in - the details are correct");
//       } else {
//         console.log("password is incorrect - please try again");
//       }
//       return;
//     }
//   }
//   console.log('Could not find an email that matches')
// }

// login("bailey@gmail.com", "abc123");



// // TASK: Create a register function that accepts username, password

// function register(user) {
//   users.push(user);
// }

// register({
//   username: "Tom",
//   email: "Tom@gmail.com",
//   password: "1password",
//   discord: "Tom#100",
//   lessonCompleted: "[0, 1, 2, 3]",
// });

// console.log(users);




// // DOM (Document Object Model)

// // First way of accessing an element (put defer after js script tag)
// console.log(document.querySelector('#title'))

// // Second way of accessing an element (only works if elem has ID)
// console.log(document.getElementById('title'))

// // Change HTML
// document.querySelector('.title').innerHTML = 'Frontend Simplified'

// // Change CSS
// document.querySelector('.title').style.fontSize = '16px'

// function changeTitleToRed () {
//   console.log('clicked')
//   document.querySelector('.title').style.color = 'red'
// }

// function toggleDarkMode (){
//   document.querySelector('body').classList.toggle("dark-theme")
// }