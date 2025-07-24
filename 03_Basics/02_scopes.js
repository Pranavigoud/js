//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log(a);

}

// console.log(a);
// console.log(b);
// console.log(a);

function one() {
    const username = "pranu"

    function two() {
        const website = "youtube"
        console.log(username);

    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "pranu"
    if (username === "pranu") {
        const website = " youtube"
        // console.log(username + website);

    }
    // console.log(website);

}
// console.log(username);
// ++++++++++++++++ interesting +++++++++++++++
console.log(addOne(5))
function addOne(num) {
    return num + 1
}
// console.log(addOne(5))

// console.log(addtwo(5)) //gives error
const addtwo = function (num) { //this is function as well as expressions(like variables)
    return num + 2
}
console.log(addtwo(5))