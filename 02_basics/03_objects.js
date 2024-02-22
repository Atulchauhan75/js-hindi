//object literals  singleton kabhi bhi nahin banta hai
// Object.create

//OBJECTS ARE KEY-VALUE PAIRS IN JS
//constructor se hamesha singleton banega
const user ={
    name:"atul",
    "full name":"Atul Chauhan",
    age:21,
    location:"Noida",
    college: "IET Lucknow",
    lastLoginDays : ["Monday","Saturday"],

}

// console.log(user);
// console.log(user.location);
//Another Method of Printing
// console.log(user["location"]);
// console.log(user["full name"]);

// HOW TO USE SYMBOL IN OBJECT // WE HAVE TO USE SYMBOL AS A KEY IN OBJECT AND THEN WE HAVE TO  PRINT IT
// Creating a symbol
const mySymbol = Symbol('description');

// Creating an object with a symbol as a key
const myObject = {
  [mySymbol]: 'value'
};

// Accessing and printing the value associated with the symbol key
// console.log(myObject[mySymbol]); // Output: value

// Printing the type of the symbol key
// console.log(typeof mySymbol); // Output: symbol

//Changing  The  Value  Of  The  Keys  Of  Objects
myObject[mySymbol]="new value"
// console.log(myObject[mySymbol])// Output:new value
user.age =35;
// console.log(user.age) // Output: 35
// console.log(user["age"])// Output: 35

//  IF WE WANT THAT NO  ONE CAN CHANGE THE VALUE OF ANY  KEY OF AN OBJECT THEN WE HAVE TO USE FREEZE
// Object.freeze(user)
//NOW I AM TRYING TO CHANGE ITS VALUE
// user.age =477;
// user.name="harsh chauhan"
// console.log(user.age) // Output: 35
// console.log(user)

//ADDING FUNCTIONS IN OBJECTS
user.greeting= function(){
    console.log(`welcome , ${this.name} in the world of js`)
}
console.log(user.greeting())// OUTPUT: welcome atul  in the world of js
// undefined
console.log(user.greeting)//OUTPUT : [Function (anonymous)]



