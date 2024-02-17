//IN js datatypes are divided into PRIMITIVE AND NON-PRIMITIVE DATATYPES
//ON THE BASIS OF HOW THESE DATTYPES WERE GET STORED IN MEMORY AND HOW WE ARE ACCESSING THEM

// PRIMITIVE DATATYPES (CALL BY VALUE)
// 7 TYPES {String,Number,Boolean,null , undefined , Symbol,BigInt}

//NON-PRIMITIVE DATATYPES(By Reference)
//{Array,Objects,Functions} // typeof or datatype of non primitive datatypes is objects for arrays and object but for 
// functions it is function or we called it as ObjectFunctions

//they both are of Number type
//DECIMAL DOES NOT HAVING A SEPARATE CATEGORY
const score = 100;
const scores = 100.33;

//Symbol is used for uniqueness
//  Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.

// SAME VALUE IS PASSED BUT RETURN TYPE OF SYMBOL CONSTRUCTOR IS NOT SAME IN id and anotherId variable so if we compare there equality then that will be false
let id = Symbol("123");
let anotherId = Symbol("123");
// console.log(id===anotherId)
// console.log(typeof id)//symbol
// console.log(typeof anotherId)//symbol


//  there is an error in the code because JavaScript does not support integers of that magnitude.
// to convert this into BigInt just type n after the number like this 28398823327874872336487246837n
const bigNumber = 8732487234872348824987239847293749n;
// console.log(bigNumber)

// const regularNumber = 123; // Regular number
// const bigIntNumber = 123n; // BigInt number

//this is a ARRAY
const arr = ["atul", "riya", "harsh", 123];
// console.log(arr)

// OJECTS WILL BE IN CURLY BRACES
//number is a variable here in which we stored an object
let number = {
  name: "atul",
  age: 21,
  status: "unmarried",
};
// console.log(number)
// console.log(typeof arr)//object

//FUNCTIONS
// FUNCTIONS CAN ALSO BE TREATED AS VARIABLES IN JS

// BELOW IS THE FUNCTION DEFINITION
// function(){}
// WE CAN STORE IT IN VARIABLE
let myFirstFunction = function () {
  console.log("Hello, I am in  my first function");
};
// console.log(myFirstFunction);

let first = null;
let second = undefined;

// console.log(typeof first)//object
// console.log(typeof second)//undefined



// LINK
// https://262.ecma-international.org/5.1/#sec-11.4.3