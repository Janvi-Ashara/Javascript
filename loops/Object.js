const myObject = {
    js: 'javascript',
    cpp : 'C++',
    py : 'python',
    rb : 'ruby'
}

for (const key in myObject) {
   console.log(`${key} - ${myObject[key]}`)
}

console.log("====")

const program = ['js','rb','py','cpp','java']
for (const element of program) {
    // console.log(element)
}

for (const key in program) {
    // console.log(program[key])
}

const city = new Map()  //it always unique
city.set('GUj', 'gandhinagar')
city.set('M.p' , 'bhopal')
city.set('Rajas', 'jaipur')
// console.log(city)

// for (const [key,value] of city) {
//     console.log(key , '-', value)
// }


//Map is not iteratble
for (const key in city) {
    console.log(key)
}


//for each loop

const coding = ["js","java","python","css","asp"]
// coding.reverse()
console.log(coding)


// 1 way
coding.forEach(function(item){
    console.log(item)
}) 


// 2 way
coding.forEach((item)=>
    {
        console.log(item)
    })


// 3 way
function printMe(item){
    console.log(item)
} 
coding.forEach(printMe)


// js
// java
// python
// css
// asp


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})
// js 0 [ 'js', 'java', 'python', 'css', 'asp' ]
// java 1 [ 'js', 'java', 'python', 'css', 'asp' ]
// python 2 [ 'js', 'java', 'python', 'css', 'asp' ]
// css 3 [ 'js', 'java', 'python', 'css', 'asp' ]
// asp 4 [ 'js', 'java', 'python', 'css', 'asp' ]

const myCoding = [
    {
        lName : "javascript",
        lFilename : "Js"
    },
    {
        lName : "Python",
        lFilename : "Py"
    },
    {
        lName : "java",
        lFilename : "Java"
    },
    {
        lName : "Html",
        lFilename : "htm"
    },
]

myCoding.forEach( (item) => 
{
    console.log(item.lFilename,item.lName)
})
// Js javascript
// Py Python
// Java java
// htm Html