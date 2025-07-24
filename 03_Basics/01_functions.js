
function sayName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("U");
}
// sayName //reference
// sayName() //execution

// function addTwoNumbers(number1, number2) { //parameters
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) { //parameters
    // let result = number1+number2
    // return result
    return number1 + number2
    console.log(result); //code after return will not run

}
// addTwoNumbers(3,4) //arguments
// addTwoNumbers(3,"a")
const result = addTwoNumbers(4, 8) //whatever this function resturns are stored in the variable called result
// console.log("Result:", result);

function loginUserMessage(username = "sam") {
    // if (username === undefined) {
    if (!username) { //professional way
        console.log("PLease enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("pranu"))
// console.log(loginUserMessage()) //o/p:-undefined just logged in

// function calculateCartPrice(...num1) { //rest operator
function calculateCartPrice(val1, val2, ...num1) { //rest operator
    return num1
}
// console.log(calculateCartPrice(200, 400, 410,23,234,3456));

const user = {
    username: "pranu",
    price: 199
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}
// handleObject(user)
handleObject({
    username: "sam",
    price: "399"
})

const myNewArray = [200, 400, 600, 900]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
