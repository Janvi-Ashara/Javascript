const gameName = new String('Piano')
console.log(gameName)
console.log(gameName[1]) // i 
console.log(gameName.__proto__)  // {} 
console.log(gameName.toUpperCase())
console.log(gameName.length)  //5
console.log(gameName.charAt(2))  //a
console.log(gameName.indexOf('o'))  //4
console.log(gameName.substring(2,4)) //an
console.log(gameName.slice(-5,4)) //pian
const url = "https://abc.com/abc%20defggfgvg"
console.log(url.replace('%20','-'))  //https://abc.com/abc-def
console.log(url.includes('abc'))  //true

const newString = gameName.substring(0,3) //pia
console.log(newString)

const namee = new String ("janvi paresh bhai ashara")
console.log(namee.split(' '))