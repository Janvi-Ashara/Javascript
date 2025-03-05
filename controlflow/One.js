const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`)
}
// console.log(`User power : ${power}`)


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3 
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("mar")
        break;
    case 4:
        console.log("april")
        break;
    
    default:
        console.log("not match")
        break;
}

const userEmail = ""
if(userEmail) {
    console.log("Got User email")
}
else{
    console.log("Don't have user email")

}

//falsy value

// false , 0 , -0 , BigInt 0n ,"" , null , undefined , NaN

//true value

// "0" ,'false' , " " , [], {} , function(){}

if(userEmail.length === 0){
    console.log("array is empty")
}

const emptyobject = {
    nm : "janvi"
}

if(Object.keys(emptyobject).length === 0){
    console.log("object is empty")
}
else{
    console.log(emptyobject.nm)
}

false == 0 //true
false == '' //true
0 == '' //true

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10 //5
// val1 = null ?? 10  //10 
val1 = undefined ?? 15 // 15

console.log(val1) //5