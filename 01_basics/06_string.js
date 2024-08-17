const name = "Srushti" 
//or another method to declare string
const urName = new String('Srush')

const repocount = 50

//console.log(name + repocount + " Value"); it is not a modern tech so use down method to print

console.log(`Hello my name is ${urName} and my repo count is ${repocount}`)

console.log(urName[0])
console.log(urName.__proto__);

console.log(urName.length);
console.log(urName.toUpperCase());

console.log(urName.charAt(0)) //which character at given index position


console.log(urName.indexOf('r')) //which index position char is present

//Slicing
const newStringSlice = urName.substring(0,3)
console.log(newStringSlice);

//or 
const anotherString = urName.slice(-4,4)
console.log(anotherString);


//trim = removes extra spaces from string
const newStringOne = "    Patil    "
console.log(newStringOne)
console.log(newStringOne.trim());

//can replace or includes word letter in url also
const url = "https://srush.com/srush%20patil"
console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes('sundar')); //checks whether sundar include in url or not and gives o/p in boolean form