//array
//array are collection of multiple datatypes
const myArr = [0, 1, 2, 3, 4, 5, true, "hi"]
const myHeros = ["dsc", "dsf"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[1]);
//Array methods
// myArr.push(6,7)
// myArr.push(8)
// myArr.pop() //removes last value
// myArr.unshift(9) //adds the value in the beginning
// myArr.shift() 
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
const newArr = myArr.join() //adds all elements into a string separated by specified separator

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);