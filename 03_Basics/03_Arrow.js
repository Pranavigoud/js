const user = {
    username: "pranu",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} ,welcome to website`);
        console.log(this);

    }
}
// user.welcomeMessage()
// user.username="Sam" //context changed here
// user.welcomeMessage()
//global object in browser console is window object
// console.log(this);

// function chai(){
//     let username ="pranu"
//     console.log(this.username); //this works only in object but not in functions
// }
// chai()

// const chai=function(){
//     let username ="pranu"
//     console.log(this);
// }
//Arrow function
// const chai = () => { 
//     let username = "pranu"
//     // console.log(this.username); //undefined
//     console.log(this);
// }
// chai()

// const user1={
//     console.log(this); //You can use console.log(this) inside a method inside the object, not directly as a statement in the object literal.

// }

// const addTwo = (num1, num2)=>{
//     return num1+num2
// }
//implicit return
// const addTwo = (num1, num2) =>num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({ username: "pranu" })
// console.log(addTwo(3, 4))
console.log(addTwo())

const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(function(){})
// myArray.forEach(()=>{})
// myArray.forEach(()=>())
