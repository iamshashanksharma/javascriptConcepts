// objects are used to store keyed collections , created with figure brackets, optional list of properties
// property is key:value pair , key is a string , value can be anything 

let user = {
    name : "John",
    age: 30,
};

console.log(user.name);
console.log(user.age);

user.admin = true;

// to remove the property 

delete user.age;

//for multiword property name user quotes

let fruits = {
    "like apple" : true,
    "not like apple" : false,
 };

 // to access above dont use . operator instead use this 

 console.log(fruits["like apple"]);

 // special operator "in"

 let vegetables ={
    name : "Lady finger",
    quality : "fresh",
 };

 console.log("name" in vegetables);
 console.log("quality" in vegetables);

 