//Array

//shallow copy - an object whose properties share the same reference

//deep copy - an object whose properties do not share the same reference
 const a =[0,1,2,"janvi"]
// console.log(a[3])


const myHero = ["krishna" , "ram" , "Buddha"]
// console.log(myHero[0])

a.push(3)  // add last value
a.pop()   // remove last value


a.unshift("Ab") //insert into start array
a.shift() // remove first element
// console.log(a)

// console.log(a.includes(9))  //false
// console.log(a.indexOf("janvi"))  //3

const newArr = a.join()
// console.log(a)
// console.log(typeof newArr)   //string

// slice and splice
const oriA = [0,1,2,3,4,5]

console.log("A" , oriA)   // A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = oriA.slice(1, 3)
console.log(myn1)   // [ 1, 2 ]
console.log("B", oriA)   // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = oriA.splice(1,3) 
console.log("c", oriA)  // c [ 0, 4, 5 ]
console.log(myn2)  // [ 1, 2, 3 ]





