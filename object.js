//object literals
//const user{} non single ton object

// const { use } = require("react")

// // const mySum = Symbol("key")
// const user ={
//     name : "mamtesh",
//     "full name":"mamtesh kumar",
//     [mySum] :" key",//for symbal
//     age : 21,
//     rollno :24236,
//     branch : "CSE" ,
//     email : "mamtesh@gmail.com",
// }
// console.log(user.email);
//  console.log(user["email"])
//  console.log(user["full name"])
//  console.log( typeof user.mySum)
//  //for change email..
//  user.email="mamtesh1@gmailcom"

//  // for nochange use freeze
// //  Object.freeze(user)
//  console.log(user)

// user.greeting = function () {
//     console.log("Hello JS user");
// }

// user.greetingTwo = function () {
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(user.greeting());
// console.log(user.greetingTwo());

//***********************
//singleton

// const user = new Object()//singleton object
// user.name = "rohan"
// user .id = "142"
// // console.log(user); 
// const regular = {
//     username :{
//         fullname:{
//             firstname : "mamtesh",
//             lastname : "kumar"
//         }
//     }
// }
// // console.log(user.fullname)
// // for combination of object
// const obj1={
//     a:"1",
//     b:"2",
//     c :"3"
// }
// const obj2 ={
//     d:"3",
//     e:"4"
// }
// const obj3={obj1 ,obj2} object inside object
// const obj3 = Object.assign(  obj1,obj2)
// object .assign (target ,source)
// target -- jis object me data copy karna hai
// source--  jis object ka data copy karna hai

//------------------- by gilas concept
// const obj3 ={...obj1,...obj2}

// console.log(obj3)
// console.log(user)
// console.log(Object.keys(user)) //Object.keys() kisi object ki sirf keys ko nikalta hai aur array ke form me return karta hai.

//++++++++++++++++++++++++++++++++++++++++++++
const course ={
    coursename :"js ",
    price :"1000",
    courseInstructer:"nkfhad",
}
// course.courseInstructer
const {courseInstructer} = course//destructuring
console.log(courseInstructer)
////////////////////////////////
//object without name  JASON
// {

// }