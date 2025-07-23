const score = 400
// console.log(score);
const balance = new Number(100)
// console.log(balance); //[Number: 100] , and can also check thr prototype methods of Number
// console.log(balance.toString().length); //now all string properties can be added
// console.log(balance.toFixed(2)); //.00
const otherNum = 123.58
// console.log(otherNum.toPrecision(3)); //3 numbers roundoff
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// clg
// if(0){
//     console.log("it is true"); // if condition is true then it executes if block or else, else block
// }else{
//     console.log("it is false");
// }
// +++++++++++++++ Maths ++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.2)); //upper value
// console.log(Math.floor(4.9)); //lower value
// console.log(Math.min(4,3,6,8)); //prints min value
// console.log(Math.random()); //value comes between 0 to 1, sometimes 0 also
// console.log((Math.random() * 10) + 1);
const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
