const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNums.map((num) => {
//     return  =num + 10}
// );

const newNum = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNum);

// myNums.forEach((item) =>{
//     console.log(item)
//     return item
// })

// The reduce() method in JavaScript is used to reduce an array to a single value like:

// ✅ Sum
// ✅ Product
// ✅ Concatenation
// ✅ Average

const nums = [1, 2, 3];
const myTotal = nums.reduce(function (acc, current) {
  return acc + current;
}, 0); // 0 is initization
console.log(myTotal); // 6

const Total = myNums.reduce((acc, current) => acc + current, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "jS cource",
    price: 2999,
  },
  {
    itemName: "Data science",
    price: 3999,
  },
  {
    itemName : "python",
    price: 9000,
  }
];
const price = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(price)
