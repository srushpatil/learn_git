const score = 400
console.log(score);

const balance = new Number(100)

console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2))

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));  //gives comma bet digits


/************************** Maths ********************************/
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2,5,3,7));
console.log(Math.max(2,5,3,7));
console.log(Math.random);