// syntax for arrays is let arr = [];

let fruits = ["apple", 'mango', 'pear'];
console.log(fruits[0]);   // Apple
console.log(fruits[1]);   // Mango
console.log(fruits[2]);   // Pear

// replace :- 

fruits[2] = "Strawberry";
console.log(fruits);
// total count of element in an array is length 

console.log(fruits.length);   // highest index of an array +1 ;

// At :- get last element with 'at'

let delFruits = ["apple", "orange", "plum"];
console.log(delFruits[delFruits.length -1]);  // Plum 

// same thing can be done with "at"
console.log(delFruits.at(-1));

// Methods : 1) push /pop , 2) shift / unshift 

/*
Push : - appends the element at the last 
shift :- get an element from the beginning so that second element becomes first 

        Shift <--- [array] <---- Push
        unshift ---> [array] ----> pop 
*/

let vegetables = ["potato", 'onion', 'beans'];
vegetables.pop();
console.log(vegetables); // [potato , onion]
vegetables.push("ladyfinger");
console.log(vegetables);  // [potato , onion , ladyfinger]
vegetables.shift();
console.log(vegetables); // [onion,ladyfinger]
vegetables.unshift("brocolli");
console.log(vegetables); // [brocolli , onion, ladyfinger]

//Loops on arrays

let arr = ["apple", "mango", "orange"];
for(let i =0;i<arr.length;i++)
{
        console.log(arr[i]);
}

// for..of loop

for(let fruits of arr)
{
        console.log(fruits);
}

//for.... in loop this loops is optimized for objects 

for(let key in arr)
{
        console.log(arr[key]);
}

// Multidimensional array

let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
]
console.log(matrix[1][1]);   

// is array copied ?

let favfruits = ["apples", "pear", "orange"];
let shoppingCart = favfruits;
console.log(shoppingCart); // apples , pear , orange 
shoppingCart.push("Banana");
console.log(favfruits.length);   //4

// This is because arrays are objects so both shopping cart and favfruits are the reference to same array


