// In summary, singleton objects are instantiated only once and maintain a single instance throughout the application, while non-singleton objects can have multiple instances created during runtime, each with its own state and behavior.

const tinderUser = new Object(); //it is a singleton object
const regularUser = {}; //it is a non-singleton object
// both are empty objects for now
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = "False";
console.log(tinderUser);

//NESTING OF OBJECTS
const user = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      first: "Atul",
      last: "Chauhan",
    },
  },
};
// console.log(user)/*OUTPUT :{
//     email: 'some@gmail.com',
//     fullname: { userfullname: { first: 'Atul', last: 'Chauhan' } }
//   } */
// console.log(user.fullname)/*OUTPUT :{ userfullname: { first: 'Atul', last: 'Chauhan' } }*/
// console.log(user.fullname.userfullname)/*OUTPUT : { first: 'Atul', last: 'Chauhan' } */
// console.log(user.fullname.userfullname.first)//OUTPUT : Atul
// console.log(user.fullname.userfullname.last)//OUTPUT : Chauhan

//SOME BASIC OPERATIONS ON OBJECTS

//MERGING OF TWO OBJECTS
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj3 = { obj1, obj2 };
// console.log(obj3); //this will produce nested objects
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// 1st method
const obj4 = Object.assign(obj1, obj2);
// console.log(obj4); //OUTPUT: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//2nd method best practice
const obj5 = Object.assign({}, obj1, obj2);
// console.log(obj5); //OUTPUT: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// 3rd METHOD (EASY TO USE) SPREAD OPERATOR
const obj6 = { ...obj1, ...obj2 };
// console.log(obj6)//OUTPUT: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// when we work with api's then we got array of OBJECTS
console.log(tinderUser);
//it returns array of keys of object
console.log(Object.keys(tinderUser));
//it returns array of values of object
console.log(Object.values(tinderUser));
//it returns array of array of key value pairs
console.log(Object.entries(tinderUser));
/*
OUTPUT
[ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', 'False' ] ] 
*/
//checking for the existence of a prticular property or key in an object
console.log(tinderUser)
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
