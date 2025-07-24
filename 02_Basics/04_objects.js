//singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "pranu",
            lastname: "goud"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }
// const obj3 = {obj1,obj2} //not expected
// const obj3 ={...obj1,...obj2}
// const obj3=Object.assign(obj1,obj2)
const obj4 = Object.assign({}, obj1, obj2, obj3) //target,source
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "k@gmail.com"
    },
    {
        id: 2,
        email: "k@gmail.com"
    }
]
// console.log(users[1].email)
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //Object.keys(obj) . array of property keys. thats y the output is in array type
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to ask that is there any property called isLoggedIn is present in the object

//destructuring in object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "pranu"
}
// course.courseInstructor

const { courseInstructor: instructor } = course
console.log(instructor);
// console.log(courseInstructor);

//API's
//json javascript object notation
// {
//     "name":"pranu",
//     "coursename":"js in hindi",
//     "price":"free"
// }
// [
//     {},
//     {},
//     {}
// ]