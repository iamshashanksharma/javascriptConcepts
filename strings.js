let str = "Hello";
console.log(str[0]);  //accessing elements

//strings immutable 
let str1 = "Hi";
// str1[0] = "h" ; error doesnot work

//changing the case 

console.log("interface".toUpperCase());  // INTERFACE
console.log("Interface".toLowerCase());  // interface 

// searching for the substring 

let string = "widget with id";
console.log(string.indexOf("widget")); //0
console.log(string.indexOf("id"));     //1
console.log(string.indexOf("id",2)); // 12

//there are three methods to get a substring 
// substring , substr , slice 

/*
str.slice(start , [,end]) not including end 
str.substring(start, [,end]) not including end , same as slice but start value can be greater than end 
str.substr(start,[,length]) 
*/

let iAmString = "stringify";
console.log(iAmString.slice(0,5)); // strin
console.log(iAmString.slice(0,1)); //s
console.log(iAmString.slice(2)); //ringify


let yourString = "stringify";
console.log(yourString.substring(2,6)); // ring   
console.log(yourString.substring(6,2)); // ring it swaps start,end

//comparing strings

console.log("a" > "Z"); //true
