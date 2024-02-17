//method1 of initialising the string
const name = "atul";

const repoCount = 50;

//old method of concatenating strings
// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//ANOTHER METHOD of initialising the string usING new KEYWORD
const gameName = new String("atulchauhan"); //its typeof is object
// console.log("printing string")
// console.log(gameName)
// console.log(typeof gameName)
console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   HARSHCHAUHAN    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://atul.com/atul%20chauhan/";

console.log(url.replace("%20", "-"));

console.log(url.includes("harshchauhan"));


//SYNTAX OF split it will convert object into string
// split(separator)
// split(separator,limit)
let another = new String("atul-chauhan-is-a-best-coder")
console.log(typeof another)//object
console.log(another.split("-"));
let x="harsh-chauhan-is-my-brother"
console.log(typeof x)//string
console.log(x.split("-"));
