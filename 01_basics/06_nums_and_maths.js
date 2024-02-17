const score = 400;

// console.log(score);

const newScore = new Number(400);
// console.log(newScore);
// console.log(typeof newScore.toString());
// console.log(newScore.toString().length);
//how many digits will be present after decimal
// console.log(newScore.toFixed(1));

const otherNumber = 502.5599;
//priority will be given to before decimal digits first
// console.log(otherNumber.toPrecision(5)); //503.56
// console.log(otherNumber.toPrecision(3)); //503
// console.log(otherNumber.toPrecision(2)); //5.0e+2

// converting into UA and indian standards
const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// converting into indian standards
// console.log(hundreds.toLocaleString("en-IN"));



//++++++++++++++++++++++ MATHS +++++++++++++++++++++
//INSPECT  it on GOOGLE console.log(Math);
// console.log(Math.abs(-43534))//43534
// console.log(Math.round(-4.35))//-4
// console.log(Math.ceil(-4.35))//-4
// console.log(Math.floor(-4.35))//-5
// console.log(Math.ceil(4.35))//5
// console.log(Math.floor(4.35))//4
// console.log(Math.min(4.35,4,5,6,77))//4
// console.log(Math.max(4.3,4,0,1))//4.3
// console.log(Math.max(4.3,4,0,1))//4.3
// console.log(Math.sqrt(4))//2
// console.log(Math.pow(4,2))//16


//WORKING WITH RANDOM
console.log(Math.random())//Math.random contains values between 0 and 1
console.log((Math.random()*10) +1)//16
console.log((Math.random()*10) +1)//16

// to generate values between a specific range min and max
const min=30
const max=50

console.log(Math.floor(Math.random()*(max-min+1))+min)
console.log((Math.random()*(max-min+1))+min)
