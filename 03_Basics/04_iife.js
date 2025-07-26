//Immediately invoked function expressions (IIFE)
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()
// ()() iife
//we also use iife to remove the global scope pollution
(function chai() {
    //named iife bcoz it has name
    console.log(`DB CONNECTED`);
})(); //semicolon is imp here to end iife
//we can also write this as arrow function
((name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('pranu')
//js code => global execution in "this"
//js is single threaded
// global exectution context
//function or functional execution context
//eval execution context. it is a property in global object ot global object itself
//js code runs in 2 phases
//js code-> memory creation phase or creation phase //memory allocated in this phase
// js code ->execution phase //execution happens here

