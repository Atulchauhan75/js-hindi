//array

const arr = [0,1,2,33.45, "atul", true ];

// console.log(arr);
// console.log(arr[1]);
// console.log(arr[5]);

//another method
const ar =new Array(1,2,3,4)
// console.log(ar);
// console.log(ar[1]);
//out of bound access shows undefined
// console.log(ar[5]);
// console.log(ar.length);


//ARRAY METHODS
ar.push(99)
ar.push("uashkash")
ar.pop()//deletes last element
ar.unshift(22);//add elements which is passed as parameter at 0th index
ar.shift()//deletes 0th index element from the array
// console.log(ar);

// console.log(ar.includes(99));
// console.log(ar.indexOf(98469));


const newarr = ar.join();//it changes the typeof array from oblect to string
console.log(newarr)
// console.log(typeof ar)
// console.log(typeof newarr)


// console.log(newarr)
console.log(1,2,3,4)

//slice , splice
console.log("A " ,arr);
const myn1 = arr.slice(1,3)
console.log(myn1)

console.log("B " ,ar);
const myn2 =ar.splice(1,3);//original array mein se bhi value remove ho jaati hain (ar.splice(x,y))= x se start karke including x y elements delete kardo
console.log(ar);
console.log(myn2);



