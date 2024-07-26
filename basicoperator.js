/*
Terms to remember :- 

operand : --- in what operators are applied to  5 * 2 -- left operand 5 and right operand 2

operator --- unary ---> single operand  let x = 1 ; x = -x ; x // -1 
             binary ----> two operand let x = 1 , y = 3; y-x // 2


 a % b // remainder
 a**b // a pow b
 4 ** (1/2)  // 4 pow 1/2 or square root result - 2            
 8 ** (1/3)  //  2
*/ 

// string concatenation with binary + 

let s = "my" + "string";
console.log(s);

// if any of the operand is string then the other is converted to string too

console.log("1" + 2); // "12"
console.log(2 + '1'); // "21"
console.log(2+2+"1"); // "41"
console.log("1"+2+2); // "122"

// binary + operator that supports string concatenation other operator converted to number

console.log(6 - "2")  //4
console.log("6"/2)  //3


//operator precedence

// if an expression contains more than one operator , the execution order is determined by precedence

/*
unary plus 
negation
exponentiation
multiplication , division (same level)
addition , subtraction (same level)
:
:
:
assignment
*/
/*
let a =1 ;
let b =2;
let c = 3-(a=b+1);
console.log(a); //3
console.log(c); //0
*/


//Increment / decrement 

/*
prefix == ++counter , --counter
postfix == counter++ , counter--


*/

let addcounter = 2;
addcounter++;
console.log(addcounter);

let subcounter = 2;
subcounter--;
console.log(subcounter);

let addcounter2 = 2;
++addcounter2;
console.log(addcounter2);

// then what is the difference b/w prefix and postfix operator 

/* Both increase the counter but if we use the value returned by ++ / -- then it is different 

*/

let counter = 1;
let prefix = ++counter;
console.log(prefix); //2

let counter2 = 1;
let suffix = counter2++;
console.log(suffix); //1


//exercises
/*
1)
let a =1 , b= 1;
let c = ++a;
let d = b++;
console.log(a);  //2
console.log(b);  //2
console.log(c);  //2
console.log(d);  //1
*/

let a = 2;
let x =1 +(a*=2);
console.log(a); //4 
console.log(x); //5

//Type conversion

/*
" " + 1 + 0  ----     "10"
" " -1 + 0   ----     -1
true + false ----      1
6/ "3"       ----      2
"2" * "3"    ----      6
4+5+"px"     ----      "9px"
"$"+4+5      ----      "$45"
"4" -2       ----       2
"4px" -2     ----       NaN
" -9  " +5   ----       "-95"
"-9" - 5     ----       -14
null +1      ----        1
undefined + 1 ----       NaN
"\t \n" -2    ----       -2





*/