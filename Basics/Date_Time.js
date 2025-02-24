// Dates

const myDate = new Date()
console.log(myDate)         // 2025-02-23T06:33:16.797Z
console.log(typeof myDate)  //object

const d = Date()
console.log(d)      //Sun Feb 23 2025 12:03:16 GMT+0530 (India Standard Time) 

console.log(myDate.toString())  //Sun Feb 23 2025 12:03:16 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())   //Sun Feb 23 2025
console.log(myDate.toISOString())  // 2025-02-23T06:33:16.797Z
console.log(myDate.toJSON())      //  025-02-23T06:33:16.797Z
console.log(myDate.toLocaleDateString())    //2/23/2025
console.log(myDate.toLocaleString())   // 2/23/2025, 12:05:25 PM
console.log(myDate.toTimeString()) //2:06:29 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString())  //Sun, 23 Feb 2025 06:37:05 GMT


let myCreateDate = new Date(2025,1,23) 
console.log(myCreateDate.toDateString())  //Sun Feb 23 2025

let myCreateDate1 = new Date(2025,1,23,5,3,7) 
console.log(myCreateDate1.toLocaleString())  //2/23/2025, 5:03:07 AM

let myCreateDate2 = new Date("12-01-2025")   //12/1/2025, 12:00:00 AM
console.log(myCreateDate2.toLocaleString())

// Time


let myStamp = Date.now()
console.log(myStamp)

console.log(myCreateDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate =  new Date()
console.log(newDate)
console.log(newDate.getMonth())   //1 

const j= newDate.toLocaleString('default',{
    weekday : "long",
    era : 'short', timeZone: Animation
})
console.log(j)
