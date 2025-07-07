// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
 
// console.log("2">1);
// console.log("02">1);

// console.log(null>0); //f
// console.log(null==0);  //f
// console.log(null >=0); //true
// console.log(1>=1);
// console.log(1==1);

// console.log(undefined == 0);
// console.log(undefined > 0); 
// console.log(undefined >= 0);
// when js tries to convert undefined to number it will get NaN
// undefined → NaN; NaN > 0 is false
// undefined is only equal to null, not 0
// undefined → NaN; NaN >= 0 is false


// ==, === → equality operators
// <, >, <=, >= → relational operators
// It becomes a number only in relational comparisons (<, >, <=, >=)
// == is loose equality, but:
// null is only loosely equal to:
// undefined
// null

console.log(undefined> null);
console.log(undefined>= null);
console.log(undefined== null);
console.log(null > undefined);
console.log(null >= undefined);
console.log(null == undefined);
// === strict comparision . checks values and types. in typescript we have strict rules. comparisions also check the type of the data
// mostly try to avoid comparing different types of data
 