/*
Functions : It is useful when similar actions to be performed again and again in many places of the script

function declaration : - 

function myMessage()
{
    alert("hello everyone !")
}
*/

/* Local variable : variable declared inside the function is only visible inside the function */

/*
function showMessage()
{
    let message = "Hello, I'm javascript ";
    alert(message);
}
showMessage();  // Hello, I'm javascript
alert(message); // error: the variable is local to function
*/

//outer variable 
/*
let userName = "john";
function showMessage()
{
    let message = "hello" + userName;
    alert(message);
}
showMessage(); // hello john

*/
/*
let userName = "john";
function showMessage(){
    userName = "Bob";
    let message = "hello" + userName;
    alert(message);  // hello Bob
}
alert(userName); // john
showMessage();   //hello bob
alert(userName); // bob 
*/
//parameters

/*
function showMessage(from ,text)
{
 alert(from + ":" + text);
}
showMessage('Ann', "Hello") ; // Ann : hello
showMessage('Ann', "Whats up ?"); // Ann : whats up ?
*/
// function expression :
// function declaration :
/* function sayHi()
{
    alert("Hello");
}
*/
//function expression:
/*
let sayHi = function()
{
    alert("hello");
}
sayHi();
*/
// callback functions: - lets look passing function as value and using fn expression

// ask(question , yes , no )

/*
question : text of the question
yes : function to return if answer is true
no: function to return if answer is false
*/

function ask(question , yes ,no)
{
 console.log(yes);
 console.log(no);
 if(confirm(question)) yes();
 else no();
}
function showOk()
{
    console.log("you agreed");
}
function showCancel()
{
    console.log("you cancelled the execution");
}
ask("Do you agree", showOk , showCancel);

// function declaration vs expression

/*
function declaration is processed before the code block is executed . they are visible everywhere in the block

function expression are executed when execution flow reaches them 

*/
/*

if function declaration global it appears global if in block it appears there

sayHi('John');  // this works hello john
function sayHi(name){
    console.log(`hello ${name}`);
}

*/

/*
sayHi('john');  // doesnot work
let sayHi = function(name)
{
    console.log(`hello ${name}`);
}

*/

