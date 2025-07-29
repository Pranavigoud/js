const userEmail = "pranu@gmail.com"
if (userEmail) {
    console.log("got it");
} else {
    console.log("didnt got it");
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

//"0", "false", " ", [], {}, function(){}

//when username=[]
// if(userEmail.length === 0){
//     console.log("array is empty");

// }

// in case of objects 
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}
//false == 0 then it is true
//false=='' i.e true
//0 == '' i.e true

//Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 25 //first one after null will print
console.log(val1);

//Terniary operator 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");
;
