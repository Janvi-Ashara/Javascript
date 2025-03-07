const coding = ["js", "java", "python", "css", "asp"];

const values = coding.forEach((item) => {
// console.log(item);
});

console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => {
    return num > 4      //without return keyword output is []
});                //with return [ 5, 6, 7, 8, 9, 10 ]
console.log(newNums)

// or 

// const newNums = []

// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

books.forEach((item) => {
    console.log(item.title,item.genre,item.edition)
})

let UserBooks = books.filter((bk)=>{
    return bk.genre === 'History'
})
console.log(UserBooks)

UserBooks = books.filter((bk)=>{
    return bk.publish >= 1995 && bk.genre === 'History'})
console.log(UserBooks)

const nonFiction = books.filter((book) => book.genre === 'Non-Fiction');
console.log(nonFiction);



