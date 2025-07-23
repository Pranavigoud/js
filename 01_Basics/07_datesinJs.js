// Dates
let myDate = new Date()
// console.log("1 " + myDate);
// console.log(typeof(myDate))
// console.log("2 " + myDate.toString());
// console.log("3 " + myDate.toDateString());
// console.log("4 " + myDate.toISOString());
// console.log("5 " + myDate.toJSON());
// console.log("6 " + myDate.toLocaleDateString());
// console.log("7 " + myDate.toLocaleString());
// console.log("8 " + myDate.getMilliseconds());
// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 0, 23,5,3)
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date("2023-01-14") //yyyy/mm/d
let myCreatedDate = new Date("01-15-2023")
// console.log(myCreatedDate.toLocaleString('en-IN')); //mm/dd/yyyy
let myTimeStamp =Date.now() //exact millisecond timestamp from jan 1 1970
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());//in ms
// console.log(Math.floor(Date.now()/1000)); // in sec
console.log(myCreatedDate.getMonth()); // starts from 0
console.log(myCreatedDate.getDay()); //starts from 0
console.log(myCreatedDate.toDateString());
let newDate = new Date()
console.log(newDate.toLocaleString('default', {
    weekday:"long"
}))