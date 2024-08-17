//declare array 
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

//another method to declare array
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

//Array methods
myArr.push(6)       //adds element to last
myArr.push(7)
myArr.pop()         //delets the element from last

myArr.unshift(9)    //adds element at first index position
myArr.shift()       //removes element at first index position

// console.log(myArr.includes(9));     //checks whether the entered element is present in array or not (gives ans in boolean)
// console.log(myArr.indexOf(3));      //gives the index position of the given number 

const newArr = myArr.join()         //converts into string
// console.log(myArr);
// console.log(newArr);

/**********************************Slice and Splice********************************* */
/*diff bet slice and splice is that when we do slice it gives element from start to end-1 and  
in splice elements range which we have given gets deleted from array*/
console.log("A ", myArr);
const myn1 = myArr.slice(3, 6)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);