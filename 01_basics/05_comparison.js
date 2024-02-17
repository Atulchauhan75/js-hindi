// console.log(2>1)//true
// console.log(2>2)//false
// console.log(2!=1)//true

//PROBLEM ARISES IN COMPARING TWO DIFFERENT DATATYPES
// console.log("2">1)
// console.log("2"!=243)

//COMPARISON AND EQUALITY CHECKS ARE TWO DIFFERENT THINGS

// WE HAVE TO AVOID COMPARISON WITH NULL AND UNDEFFINED BECAUSE THEY WILL GIVE UNPREDICTABLE RESULTS
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)
//WITH UNDEFINED IN ALL CASES WE GOT OUR ANSWER FALSE
// console.log(undefined>=0)
// console.log(undefined==0)
// console.log(undefined<=0)

//=== STRICT EQUAL IT CHECKS DATATYPE ALSO ALONG WITH VALUE
console.log("2" === 2); //false because datatype is different
console.log("2" == 2); //true because we are not using strictly equal operator for comparison
