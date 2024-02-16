let score = 5326;

// console.log(typeof score);
// console.log(typeof score); //we can pass score as a method
score = "5326";
//now score has a string type
// console.log(typeof score);
// console.log(typeof score);

//now we will convert one datatypr to another

//SYNTAX FOR CONVERSION
// let variable_name=new_dataType(old value VARIABLE NAME which have to be converted into new dataType)

let x = Number(score);
// console.log("check  the datatype of x and score:");
// console.log(typeof score);
// console.log(typeof x);

//suppose x score if "636abc"
score = "636abc";
//score ="atul" it also cannot be converted into a number
x = Number(score);
// console.log("check  the datatype of x and score:");
// console.log(typeof score);
// console.log(typeof x);
// console.log(x)//now it has of type NaN(not a number) because now score cannot be converted into number

//NOTES
//"33" => number
//"33abc" => NaN(not a number)
//true=> 1 ; false=>0;


//CONVERSION INTO BOOLEAN
// let isLoggedIn = null
// let checkIsLoggedInValue= Boolean(isLoggedIn);
// console.log(checkIsLoggedInValue)

//1=> true ; 0=>false
//""=>false
//"atul" =>true
//(any value!=0) => true
//NaN =>false
//null =>false


//CONVERSION INTO STRING
let someNumber=324
let changedSomeNumber=String(someNumber);
console.log(changedSomeNumber);
console.log(typeof(changedSomeNumber));