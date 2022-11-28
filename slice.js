///The slice() method extracts a section of a string and returns 
///it as a new string, without modifying the original string.

/// same in array but you select elements not characters  
//The slice() method extracts a section of a string and returns 
//it as a new string, without modifying the original string.

// same in array but you select elements not characters  


const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
/// expected output: "the lazy dog."

console.log(str.slice(4, 19));
/// expected output: "quick brown fox"

console.log(str.slice(-4));
/// expected output: "dog."

console.log(str.slice(-9, -5));
/// expected output: "lazy"

console.log(str.slice(0, 2)); 
///expected output: "the"
///Up to and including the last index!!!
/// Different for python. 

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
///orange,lemon

const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits.slice(-3, -1);
///lemon,apple