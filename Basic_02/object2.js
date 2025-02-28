// const tinderUser1 = {}
// console.log(tinderUser1)   //{}

// singletone object
const tinderUser = new Object();
console.log(tinderUser); //{}

tinderUser.id = "12";
tinderUser.name = "Ram";
tinderUser.isLoggedin = false;

console.log(tinderUser)

const regularUser = {
  email: "hello@gmail.com",
  fullname: {
    userFullname: {
      firstname: "janvi",
      lastname: "Ashara",
    },
  },
};
console.log(regularUser.fullname.userFullname)

const obj1 = { 1: "a", 2: "b" }; // target
const obj2 = { 3: "c", 4: "d" }; // source
const obj5 = { 5: "e", 6: "f" }; //source
const obj3 = {obj1 , obj2}   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = { ...obj1, ...obj2 }; //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2, obj5);
console.log(obj4)   //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

console.log(Object.keys(tinderUser))  //[ 'id', 'name', 'isLoggedin' ]
console.log(Object.values(tinderUser))  //[ '12', 'Ram', false ]
console.log(Object.entries(tinderUser)) //[ [ 'id', '12' ], [ 'name', 'Ram' ], [ 'isLoggedin', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedin'))  //true , property che k nai check karva

//Destucturing

const course = {
  coursename: "javascript",
  price: "999",
  courseTeacher: "Meera",
};

// console.log(course.courseTeacher)

const { courseTeacher: Teacher } = course; // object Destucturing
console.log(Teacher)