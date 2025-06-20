let score = 33;
console.log(typeof score);               // print as number
console.log(typeof (score));             // print as number

let newScore = "33";
console.log(typeof newScore);           // print as string
console.log(typeof (newScore));         // print as string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);      // print as number

let new2Score = "33abc";
let valueIn2Number = Number(new2Score);
console.log(typeof valueIn2Number);     // print as number also so be careful in js

// special cases
score = null;
console.log(Number(score));             // print as 0

score = undefined;
console.log(Number(score));             // print as NaN

newScore = true;
console.log(Number(newScore));          // print as 1

newScore = false;
console.log(Number(newScore));          // print as 0

// Conversion examples:
// "33"    => 33
// "33abc" => NaN

let isLoggedIn = 1;
let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(booleanIsloggedIn);         // print true

isLoggedIn = "";
console.log(Boolean(isLoggedIn));       // empty string - false

isLoggedIn = "yash";
console.log(Boolean(isLoggedIn));       // print - true

/* 
1      => true 
0      => false 
""     => false 
"yash" => true 
*/

let somenumber = 33;
let stringNumber = String(somenumber);
console.log(stringNumber);              // 33
console.log(typeof stringNumber);       // string

// ************operations***********************
let value = 3;
let negValue = -value;
console.log(negValue);                  // -3

console.log(2 + 2);                     // 4
console.log(2 - 2);                     // 0
console.log(2 * 2);                     // 4
console.log(2 ** 3);                    // power => 8
console.log(2 / 3);                     // divide => 0.666...
console.log(2 % 3);                     // remainder => 2

let str1 = "hello";
let str2 = "yash";

let str3 = str1 + str2;
console.log(str3);                      // helloyash

console.log("1" + 2);                   // 12
console.log(1 + "2");                   // 12
console.log("1" + "2");                 // 12
console.log("1" + 2 + 2);               // 122
console.log(1 + 2 + "2");               // 32

console.log(true);                      // true
console.log(+true);                     // 1
// console.log(true+);                  // error (invalid syntax)
console.log(+"");                       // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);              // 101

++gameCounter;                         // increment again
console.log(gameCounter);              // 102
