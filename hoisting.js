/*
hoisting : - it is a javascript mechanism where variables and function declaration 
             are moved to the top of there scope before code execution .

var , let , const 

var :- scope of var keyword is current execution context either enclosing function or for variable declared outside function global 

*/
console.log(hoist);
var hoist = 100;
// we expected reference error but result is undefined because interpreter sees like this 
/*
var hoist;
console.log(hoist);
hoist = 100;
js has hoisted the variable declaration so we should always use variable after declaring 
*/
// let is block scope not function scope


/*
console.log(hoist1) // reference error
let hoist1 = 100;
*/


// js hoists variable with let and const difference is how it hoists them let and const variable is not initialized at the beginning 
// while variable declared with var are undefined 

// IMP point :_______-----
// Function declaration is hoisted not function expression 

// Another thing to note is order of precedence of hoisting 
// variable assignment > function declaration
// function declaration > variable declaration

// ex

/* var double = 32;
 function double(num){
    return num*2;
 }
 console.log(typeof double); // number   */

 // ex2

 var double;
 function double(num){
    return num*2;
 }
 console.log(typeof double) // function