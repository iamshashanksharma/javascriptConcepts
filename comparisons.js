// > , < , >= , <= , == , !=  all comparison operator return a boolean value :- true / false
// ex : 2 > 1 true , 2 == 1 false , 2 != 1 true


// string comparison 

console.log('Z' > 'A') // true
console.log("Glow" > "Glee") // true
console.log("Bee" > "Be")  // true 

// compare first character of both strings if the char is greater than string greater we are done or viceversa

//comparison of different types  -- js converts the value to number

/*
('2' > 1)  -- true , string 2 becomes 2
('01' == 1) -- true 01 string becomes 1
true == 1   -- true , true becomes 1
false == 0  -- false , false becomes 0

let a = 0;
Boolean(a); // false;

let b  = "0"; 
Boolean(b) // true
 a == b // true ; ? funny hmm both values are different but ==(double equals give zero becuase it converts string to number )

for this there is strict equality ===

*/

// Strict equality 

/*
0 == false //true 
"" == false // true 

it cannot differentiate 0 from false it converts usign numeric conversion rules 
for that === strict equality without type conversion 
*/

console.log(0 === false) ; // false
console.log(null === undefined) // false
console.log(null == undefined ) // true , null and undefined equals each other only 


/*
null > 0  // false , null converted to number
null == 0 // false , null and undefined does not equal any other but each other like sweet couple  
null >= 0 // true , null converted to number

undefined > 0 // false // converts to NaN which gives false for all comparison 
undefined < 0 // false
undefined == 0 // false


*/

/*
Exercises : - 
5 > 4                       -- true
"apple" > "pineapple"       -- false
"2" > "12"                  --  true
undefined == null           -- true (sweet couple theory)
undefined === null          -- false (different type)
null == "\n0\n"             -- false ( sweet couple theory)
null === "\n0\n"            -- false (different type)

*/
