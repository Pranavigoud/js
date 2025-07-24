//we can declare object in 2 ways 1.literal 2.constructor
//singleton - it is a single object which is made by constructor
// Object.create
//object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Pranu",
    // mySym:"myKey1",
    [mySym]: "myKey1", // to make it as symbol . we should use square bracket
    age: 18,
    location: "Hyd",
    email: "fvgbhj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser);
// console.log(JsUser.isLoggedIn);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(JsUser.email="dscfghj@gmail.com");
// Object.freeze(JsUser)
JsUser.email = "asdfghhj@gmail.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingtwo = function () {
    console.log(`Hello JS user ${this.name}`);
}
// console.log(JsUser.greeting()); //trying to print return type where function doesnt have any return type
JsUser.greeting()
JsUser.greetingtwo()