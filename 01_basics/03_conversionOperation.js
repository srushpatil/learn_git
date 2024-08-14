let score = "33abc"

console.log(typeof score);
//or
console.log(typeof(score));

//to convert string 33 to number 
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);  // gives NAN as a output

//"33" can convert easily to number 33
// "33abc" gives NaN coz it can't get converted
// true = 1 false = 0