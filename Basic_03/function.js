function namee(nm){
    console.log(nm)
}
namee("janvi")

function sum(no1,no2){
     console.log(no1+no2)
}
const result = sum(3,6)
console.log("result : ", result)  //undefine

function addition(no1,no2){
    return no1 + no2
}
const result1 = addition(3,6)
console.log("result : ", result1)



function loginUseMsg(username  = "hello"){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    else{
    return `${username} just logged in`
    }
}
console.log(loginUseMsg())  //undefined just logged in
console.log(loginUseMsg("janvi")) //janvi just logged in


function calculateCart(val1, val2, ...no){   //rest operator
        return no
}
console.log(calculateCart(200,500,400,1000))  //[ 400, 1000 ]

// const user = {
//         username : "janvi",
//         price : 199
// }

function handleObject(anyobject){
                console.log(`Username is ${anyobject.username} and price is ${anyobject.price} ,class is ${anyobject.class}`)
}

// handleObject(user)
handleObject({                // direct pass object value
        username: "janvi",   
        price : 399,
        class : "MCA"
})

const myNewArray = [200, 400 ,500, 1000]

function returnSecondValue(getArray){
        return getArray[3]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,600]))