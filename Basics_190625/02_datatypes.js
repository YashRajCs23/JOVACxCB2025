"use strict"; //treat all JS code as newer vwesion

// alert("hello") // we are usi g nodeJS not browser

//code readability should be high

let name = "yash"
let age=18
let isLoggedIn= false

//number => 2 to power 53
//bigint
//string=> ""
//boolean=> t/f
//null => standalone value
//undefined =>
//symbol=> unique

//object

console.log(typeof age);
console.log(typeof "yash");
console.log(typeof isLoggedIn);

console.log(typeof null); // oblect (null ek object h)
console.log(typeof undefined); // undefined

// ******************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "yashdotcom"

let anothername = myYoutubename
anothername= "yash"

console.log(myYoutubename);
console.log(anothername)

let userOne = {
    email: "abc",
    upi: "123"
}

let userTwo = userOne

userTwo.email = "xyz"

console.log(userOne.email);
console.log(userTwo.email);