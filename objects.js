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

 // for in loop

 let user2 = {
    name : "john",
    age : 30,
    isAdmin : true,

 }

 for(let key in user2)
    {
        console.log(key);
        console.log(user2[key]);
    }

  // multiply numeric properties by 2 
  
  let menu = {
    width : 200,
    height : 300,
    title : "My menu",
  };

  function multiplyNumeric(menu){
    for(let key in menu)
        {
            if(typeof menu[key] == "number"){
                menu[key] = menu[key] *2;
            }
        }
     console.log(menu);
    }

   multiplyNumeric(menu); 
