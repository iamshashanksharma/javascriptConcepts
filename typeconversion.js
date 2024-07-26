// string conversion 

let value = true;
value = String(value);
console.log(typeof value);  // string 

// false becomes "false" , null becomes "null"

//Numeric conversion

/*
   value             becomes
    null                0
    undefined          NaN
    true and false     1 and  0
    string             whitespaces from start and end removed string empty - 0 
                       otherwise number read else NaN 
*/

console.log("6"/"2") ; // string is converted to number by division and multiplication operator

console.log(Number(" 123 ")) // 123
console.log(Number("123z")) // NaN
console.log(Number(true))    // 1
console.log(Number(" ")) // 0

//Boolean conversion

/*
value                      becomes
0 , null , undefined,         false
empty string , NaN

any other value                true

"0"                           true 

" "                            true (because of space)

*/

