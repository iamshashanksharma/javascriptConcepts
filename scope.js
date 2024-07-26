/*
Global variable : - 
   when you create a variable out on open it is called global variable not in function , module , if statement
   in the browser , the global scope is window 

*/

// function scoping :- 
/*
const age  = 100;
function go()
{
    const hair  = "blonde";
}
go();
console.log(age); // 100
console.log(hair); // Reference error : hair is not defined 
*/


// Because variable made inside the function are not accessible outside until returned 
/*
const age = 100;
function go()
{
    const age = 200;
    const hair = " blonde";
    console.log(age); // 200
    console.log(hair); // blonde
}
*/
// block scope :
/*
function abc()
{
    let i = 1;
    if(i ==1)
    {
    const fname = "shashank";
    console.log(fname); // this works
    }
   // console.log(fname); // fname is not defined because const is block scope
}
abc();

*/

const dog = "snickers";
function logDog()
{
    console.log(dog);    // snickers
}
function go(){
    const dog = "sunny";
    logDog();
}
go();

// it results snickers not sunny even if you call it from there 

/*
the above result is possible because what is called lexical scoping or static scoping 
is the way variable lookup or scope lookup happens is where function defined not where it runs 
so even the logDog function is run inside of another function which has locally scoped dog variable
it doesnot care where it is run , it cares about where it is defined.
*/

