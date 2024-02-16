const accountId = 14455;
let accountEmail = "atul@gmail.com";
var accoutnPassord= "49911";
let accountCity="Lucknow";
console.log(accountId);
console.log(accountCity);
// accountId=2 is not allowed beacuse we have alrady 
// declared it with a const keyword which cannot be 
// changed further
 accoutnPassord= "4184198911";
 accountCity="LosAngeles";
 // if we did not initialise the accountState and then trying to print it then it will showw that accountState has a value undefined
let accountState;



 //another way of printing 
console.table([accountCity,accountEmail,accoutnPassord,accountId,accountState])

/*prefered not to use var
because of issue in bloack scpe and functional scope*/ 