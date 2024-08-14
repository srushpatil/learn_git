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

//*************************Operations *******************************

let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2+2); //Addition
console.log(2-2); //Substraction
console.log(2*2); //Multiplication
console.log(2/2); //division
console.log(2**3); //gives power of 2*2*2
console.log(2%3); //Modulus


let str1 = "Hello"
let str2 = " Srushti"
let str3 = str1+str2
console.log(str3);

console.log("1" + 2) //o/p 12
console.log(1 + "2") //o/p 12
console.log("1" + 2 + 2) //o/p 122 coz if first string is there then it converts all other nos to string only
console.log(1 + 2 + "2") //o/p 32 coz first add operation is there so first adds n then adds string to it

console.log(true) //prints true
console.log(+true) //prints 1
