//single tone 
//object.create


//objects literals 

const mySym = Symbol("key1")
const User = {
    name:"janvi",   //here name key is consider as a string
    "full name" : "Janvi Ashara",
    age : 22,
    location :"mumbai",
    email : "janvi@google.com",
    isLoggedIn : false,
    lastLoginDays: ["mondays" , "friday"],
    [mySym] : "MyKey1"    //[Symbol(key1)]: 'MyKey1'
}
console.log(User.name) // janvi
console.log(User["location"])  //mumbai
console.log(User["full name"])  //janvi ashara
console.log(User[mySym])  //MyKey1
console.log(User)

User.email = "janvi123@gmail.com"   //change the value
console.log(User)

Object.freeze(User)   // now not change the value 
User.email = "janviA@mail.com"
console.log(User.email) // janvi123@gmail.com


//literals
User.greeting = function(){
    console.log(`Welcome js User , ${this.name}`)
}
User.greeting()
