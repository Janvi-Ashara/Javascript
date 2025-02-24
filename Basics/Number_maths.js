const score = 500;
 console.log(score)   //500

const ascore = new Number(500);
console.log(ascore)   //[Number: 500]

console.log(ascore.toString())   //500
console.log(ascore.toString().length)   //3
console.log(ascore.toFixed(3))   //500.000

const number = 127.34555
console.log(number.toPrecision(4)) //127.3

const hundres = 10000000
console.log(hundres.toLocaleString('en-IN'))

console.log(Math.abs(-4))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.1))
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random() * 10) + 1); //not come 0 value ,up to 1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //+1 means 0 should not come
