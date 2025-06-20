const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8234
const otherNumber1 = 123.8234
const otherNumber2= 12323.8234

console.log(otherNumber.toPrecision(3));
console.log(otherNumber1.toPrecision(3));
console.log(otherNumber2.toPrecision(4));


const hundreds =100000000
console.log(hundreds.toLocaleString('en-IN'));

// *************MATHS*******************


console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.3)); //4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.6));//5
console.log(Math.floor(4.6));//4
console.log(Math.min(4 , 5 ,6 ,7));//4
console.log(Math.max(4 , 5 ,6 ,7));//7

console.log(Math.random());//bw 0-1
console.log((Math.random()*10) +1);//bw 1-10
console.log(Math.floor(Math.random()*10) +1);//bw 1-10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max- min +1)) + min );