/* +++++++++++++++++++++++ TYPES OF MEMORY IN JS ++++++++++++++++++++++++++++*/

//Stack Memory= it is used with all PRIMITIVE DATATYPES
//Heap Memory= it is used with all NON-PRIMITIVE DATATYPES

//stack memory(call by value)
let a = "atulchaauhan"
let b = a;
b = "riyachauhan"
console.log(a)
console.log(b)

//heap memory(call by reference)
let userOne = {
  email: "abcd123@gmail.com",
  age: 21,
}
let userTwo=userOne
userTwo.email="atul@gmail.com"
console.log(userOne)
console.log(userTwo)
