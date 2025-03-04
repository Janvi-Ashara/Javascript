const user = {
    username : "janvi",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welocme to website`);
        console.log(this)
    }
}
user.welcomeMessage()
user.username = "risha"
user.welcomeMessage()


console.log(this)  //{} empty object
// op : 
//janvi , welocme to website
// {
//     username: 'janvi',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }
//   risha , welocme to website
//   {
//     username: 'risha',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

function one(){
    let username = "janu"
    console.log(username) //janu
    console.log(this.username) // undefine
}
one()


const chai = function(){
    this.username = "janvi"
    console.log(this.username)   //janvi
}
chai()


const coffee = () => {
    let username = "janvi"
    console.log(this.username)  //undefine
}
coffee()

// Here, coffee() is an arrow function, and arrow functions do not have their own this.
// They inherit this from the parent scope — in this case, the global scope (window in browser or {} in Node.js).

// So,

// In Node.js → this refers to an empty object {}.
// In Browser → this refers to the window object.
// ✅ But username is just a local variable, not a property of this.

const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,5))

const addtwo = (num1,num2) => num1+num2  //implicit function no needed return keyword
console.log(addtwo(6,4))  // 10

const nmae = () => ({username : "hello"})
console.log(nmae())   //{ username: 'hello' }