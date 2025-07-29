//if
const isUserLoggedIn = true
const temperature = 41
// if (temperature === 40) {
// console.log("less than 50");
// }else{
//     console.log("temp is greater than 50");
// }
// console.log("executed");
//scope
// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);
// <,>,<=,>=,==, !=, ===, !==   

//shortend notation

const balance = 1000

// if (balance > 500) console.log("test");

// if (balance > 500) console.log("test"),
// console.log("test1"); //dont write this type of code . its not best practice

// if (balance < 500) {
//     console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 950) {
//     console.log("less than 950");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard && 2 == 3) {
    console.log("Allow to buy course");

}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");

}