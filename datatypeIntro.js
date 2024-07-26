// 1 ; Numbers : store both floating and integer value 

let number = 123;
// besides this 3 special value NaN , Infinity , -Infinity which comes under number data type

let infinityNumber = 1/0; // special value is Infinity

let expression = "oranges are sour " / 2 ; // special value is NaN

// simillarly for expression like NaN +1 , NaN *3 besides exception which is mentioned below

let exceptExpression = NaN ** 0; // outputs : 1

//2 :- BigInt : numbers range (2 pow 53 -1 to - 2 pow 53 -1) after that precision fault occurs for that BigInt comes to rescue

let BigInt = 12432142145261562156727616281261828718291928918281n;
console.log(BigInt);

//3   String : can be formed using 3 ways : double quotes , single quotes , backticks first two ways are same third is used to add expression and other value of string
 

let schoolName = "Abc Bharti school";   //Abc Bharti school
let collegeName = "def bharti college";  // def bharti college
let newName = `school name is not ${collegeName}`;  // school name is not def bharti college
let expressionString = `2 + 2 is ${2+2} `;  // 2 + 2 is 4 .

//4 Boolean : true /false

let greatestNumber = 4>1;   // true

//5 null : empty , nothing , dont have value;

let homosapiensBirthday = null;


//6 undefined : value not assigned;

let age;
 
//7 objects and symbols to be cover later 


// Exercise

let name = "Ilya";

console.log(`hello ${1}`); // ? hell0 1

console.log(`hello ${"name"}`) ; // ? hello name
 
console.log(`hello ${name}`); // ?  hello Ilya


