//primitive
//7 types:string, NUmber, boolean , null, undefined,bigint, symbol(to make value unique we use symbol)

// js is dynamically typed language

const score = 100
const Scoreval = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log([id, anotherId]);

const bigNumber = 123659451659784515n //bigint
//non primitive or reference type
//Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "pranu",
    age: 22
}

const myFunction =function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);
console.log(typeof Scoreval);
console.log(typeof myFunction);
console.log(typeof anotherId);
