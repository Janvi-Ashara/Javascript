console.log("hello world")

const id = Symbol("12")
const ida = Symbol("12")

console.log(id === ida)

//false


const number = 100.5
console.log(typeof number)
//number

const No = 928384089058040430n
console.log(typeof No)
//bigint


const temp = null
console.log(typeof temp)
//object

let name;
console.log(typeof name);
//undefined


//Stack and heap :

// for primitive datatypes - (store in stack) - using call by value and create a copy in stack

let myName = "janvi"
let nm = myName
nm = "jhanvi"
console.log(nm)   // jhanvi 
console.log(myName) // janvi  //not change by original name

// for nonprimitive datatypes - (store in heap) - using cal by reference - change in original data

let userOne = {
    email : "abc@gmail.com",
    pass : "123"
}
console.log(userOne)
let userTwo = userOne
userTwo.email =  "abcdeftlg@gmail.com",
console.log(userTwo.email)
console.log(userOne.email)    // here change a original data
