//Array

//shallow copy - an object whose properties share the same reference

//deep copy - an object whose properties do not share the same reference
const a =[0,1,2,"janvi"]
console.log(a[3])


const myHero = ["krishna" , "ram" , "Buddha"]
console.log(myHero[0])

a.push(3)  // add last value
a.pop()   // remove last value


a.unshift("Ab") //insert into start array
a.shift() // remove first element
console.log(a)

console.log(a.includes(9))  //false
console.log(a.indexOf("janvi"))  //3

const newArr = a.join()
console.log(a)
console.log(typeof newArr)   //string

// slice and splice
const oriA = [0,1,2,3,4,5]

console.log("A" , oriA)   // A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = oriA.slice(1, 3)
console.log(myn1)   // [ 1, 2 ]
console.log("B", oriA)   // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = oriA.splice(1,3) 
console.log("c", oriA)  // c [ 0, 4, 5 ]
console.log(myn2)  // [ 1, 2, 3 ]

const ramayan_heros = ["ram" ,"laxman" ,"ripu"]
const mahabharat_hero = ["krishna", "arjun","karn"]

ramayan_heros.push(mahabharat_hero)
console.log(ramayan_heros)   //[ 'ram', 'laxman', 'ripu', [ 'krishna', 'arjun', 'karn' ] ]

const heroes= ramayan_heros.concat(mahabharat_hero)
console.log(heroes)  //[ 'ram', 'laxman', 'ripu',  'krishna', 'arjun', 'karn' ]

const all_heroes = [...ramayan_heros , ...mahabharat_hero]
console.log(all_heroes)   // 'ram', 'laxman', 'ripu', 'krishna', 'arjun', 'karn' ]

const another_array = [1,2,3, [4,5,6],7 ,[6,7, [4,5]]]
const full_array = another_array.flat(1)  ///[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
console.log(full_array) 

const full_array2 = another_array.flat(Infinity)
console.log(full_array2)

//[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]


console.log(Array.isArray("janvi"))   //false
console.log(Array.from("janvi"))  //[ 'j', 'a', 'n', 'v', 'i' ]
console.log(Array.from({name:"janvi"}))   //[]   imp interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
