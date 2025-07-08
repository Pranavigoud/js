const name = "hi"
const repoCount = 50
const gameName = new String("Hitesgh-hc-com")
// console.log(name + repoCount + "value"); not recommended but works
// console.log(`Hello my name is ${name} and my repo count is ${repoCount} nd ${gameName}`);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); // element present in that index
// console.log(gameName.indexOf('t')); // shows the index of character

// const newString = gameName.substring(0, 4) //last index number doesnt include ex:hite
// console.log(newString);
// const anotherString = gameName.slice(-8, 4) //we can give -ve numbers also, startindex,endindex-1
// for -ve values index 0 is -10
// const anotherString = gameName.slice(-15,4) //hite
// console.log(anotherString);
const newString1 = "   hitesh   "
const newName= name.split('').reverse().join('')
console.log(newName);

// console.log(newString1);
// console.log(newString1.trim()); //removes extra space , and we also have trimstart and trimend
// console.log(newString1.trimEnd());
// const url ="google.com"
// console.log(url.replace('google.com','http://google.com')); // it replaces the url
// console.log(url.includes('google'))//it questions url that this keywords do include?
// it can be true or false
// converting string into array based on something like space or dash etc
// syn: split(separator), or split(separator,limit)
console.log(gameName.split('-'));
