const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batsman"]
// marvel_heros.push(dc_heros) //pushes the data into an existing array
// console.log(marvel_heros); 
// console.log(dc_heros);
// console.log(marvel_heros[3][1]);
// const allHeros = marvel_heros.concat(dc_heros) //merges 2 arrays and returns new array
// console.log(allHeros);
const all_new_heros = [...marvel_heros, ...dc_heros] //mostly we use this spread operator then concat
// console.log(all_new_heros);
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) //write the depth we need to solve in the ()
console.log(real_another_array);

console.log(Array.isArray("Pranu"))
console.log(Array.from("Pranu"));
// interesting question in interview
console.log(Array.from({ name: "Pranu" }));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
