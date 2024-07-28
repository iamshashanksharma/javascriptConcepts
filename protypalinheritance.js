/*In programming we often want to take something and extend it 
supppose we have a user object with its properties and methods and want to make admin
and guest as slightly modified version of it we'd use not copy and reimplement just build
new object over it , In js objects have a special hidden property [[prototype]]
when we read a property from object and its missing Js auto takes it from prototype 
This is called prototypal inheritance 

*/

let animal ={
    eats : true,
};
let rabbit = {
    jumps : true,
};

rabbit.__proto__ = animal; // if we read a property from rabbit and its missing js will automatically take from animal

console.log(rabbit.eats);   // true

// if we have a method in animal . It can be called on rabbit

let wildAnimals ={
    eats: true,
    walk(){
        alert("animal walk");
    },
};
let happyRabbit = {
    jumps : true,
    __proto__ : wildAnimals,
};

console.log(happyRabbit.walk());  // walk is taken from prototype

/*
animal [ eats: true]
       [ walk : function]
        | [Prototype]
rabbit [jumps : true]       

*/


// writing doesnot use protoype we can do it directly with objects

let happyAnimal = {
    eats : true,
    walk(){
        alert("happy animal");

    }
};
let angryRabbit = {
    jumps: true,
    __proto__ : happyAnimal,
};
angryRabbit.walk = function()
{
    alert("Rabbit angry ! angry !");

}

angryRabbit.walk(); // Rabbit angry ! angry !