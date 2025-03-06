const car = ['bmw', 'audi','jguar','ferrari']

for (const thing of car) {
    // console.log(thing)
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(greet)
}

//Maps

const city = new Map()  //it always unique
city.set('GUj', 'gandhinagar')
city.set('M.p' , 'bhopal')
city.set('Rajas', 'jaipur')
console.log(city)

for(const [key, value] of city){
    console.log(key,'-', value)
}

const myObject = {
    "game" : 'NFS',
    'game2' : 'spiderman'
}

// for(const [key, value] of ){
//     console.log(key,'-', value)
// }