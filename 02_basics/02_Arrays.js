const mh = ["thor", "Ironman", "spiderman"];
const dch = ["superman", "flash", "batman"];

// mh.push(dch)
// console.log(mh);
//output of console.log(mh) 
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//SO,
// console.log(mh[3])//[ 'superman', 'flash', 'batman' ]
// console.log(mh[3][1])// 'flash'

const allHeroes = mh.concat(dch);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allHeroes)


//spread to merge two arrays which were passed
const allNew = [...mh , ...dch]
// console.log(allNew)

const anotherArray = [1,2,3,[4,5,6],[7,8,[9,10]]]
const realArray=anotherArray.flat(Infinity);
// console.log(realArray)

//check whether it is array or not
// console.log(Array.isArray("atul chauhan"))//false
// console.log(Array.from("atul chauhan"))
// // [
//     //   'a', 't', 'u', 'l',
//     //   ' ', 'c', 'h', 'a',
//     //   'u', 'h', 'a', 'n'
// // ]
    console.log(Array.from({name : "chauhan"}))//interesting because it returns an empty array so we have to specify that we have to make array of keys or values of an objects


    let x=100
    let y=200
    let z=300
    //it makes new array of elements which were passed as parameters
    console.log(Array.of(x,y,z))// [ 100, 200, 300 ]