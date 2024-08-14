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

/*to check boolean conversion*/ 
// fot 1= true, 0=false, ""=false, "srushti"=true
let IsLoggedIn = 1
let BooleanisLoggedIn = Boolean(IsLoggedIn)
console.log(BooleanisLoggedIn)

/*for string conversion */
let someno = 33
let stringno = String(someno)
console.log(stringno)
console.log(typeof(stringno));