// || or && and ! not 

/* 
OR (||) -- finds the first truthy value for each operand converts to boolean result - true - stops - 
return original value else last 

AND(&&) -- finds first falsy value otherwise return last of operand 

NOT(!) -- converts operand to boolean type

!true -- false
!!"non-empty string"   // true
*/

console.log(1 || 0 ) ; //  1 return 
console.log(null || 1); //  1 return
console.log(null || 0 || 1) // 1 return 
console.log(undefined ||null ||0) // 0

let firstName = "";
let lastName = "";
let nickName = "supercoder";
console.log(firstName || lastName || nickName || "Anonymous");// supercoder

// exercise

console.log(alert(1) || 2 || alert(3));  // first message 1 return undefined then 2 truthy

console.log(alert(1) && alert(2));       // first message 1 return undefined falsy so stops

alert(null || 2 && 3 || 4 ) // && precedence higher than || 

// 2 && 3 -- 3 now it becomes null || 3 || 4 --- result is 3

