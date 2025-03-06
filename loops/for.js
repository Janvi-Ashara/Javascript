for (let i = 0; i < 10; i++) {
    const element = i
    console.log(element)
} 

for (let i=1; i<=5; i++){
    let row = '';
    for(let j=1; j<=i; j++){
        row += j
    }
    console.log(row)
}

// 1
// 22
// 333
// 4444
// 55555

for(let i=0 ; i<=10; i++){
    const element = i ;
    if(element == 5){
        console.log("5 best number")
    }
    console.log(element)
}

// print table 1 to 10
for(let i=1; i<=10; i++){
    console.log(`outerloop loop is ${i}`)
    for(let j=1;  j<=10; j++){
        console.log(i ,"*" , j ,"=" , i*j)
    }
}


let myArray = ['ram', 'krishna' , 'narayan']
console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]) 
}

for (let i = 0; i <= 20; i++) {
    if(i==5){
    console.log('found 5')
        // continue
        break
    }
    console.log(`value of loop is ${i}`)
} 