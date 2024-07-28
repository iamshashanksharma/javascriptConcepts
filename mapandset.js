/*Map :
collection of keyed data items just like an object. But the main difference is that map allows key
of any type
new Map() -> creates the map 
map.set(key, value) -> stores the value by the key
map.get(key) -> returns the value by the key
map.has(key) -> return true if key exist else false
map.delete(key) -> delete key/value pair
map.clear() -> removes everything from map
map.size()  -> return current element count 

*/
/*
let map = new Map();
map.set("1" , "str1");
map.set(1, "num1");
map.set(true , "bool1");
map.set("num" , 1);
alert(map.get(1));
alert(map.get("num"));
alert(map.get(true));
alert(map.size);
alert(map.has("1"));
alert(map.delete("num"));
alert(map.size);
alert(map.clear());
alert(map);
*/
//Iteration over map 

let recipeMap = new Map([
    ["cucumber" , 500],
    ["tomatoes", 100],
    ["onion", 50]
]);

for(let vegetable of recipeMap.keys())
    {
        console.log(vegetable);
    }
 
for(let amount of recipeMap.values())
    {
        console.log(amount);
    }
for(let entry of recipeMap)
    {
        console.log(entry);
    }    

 // map from object : if we have plain object and we want to create map from it then 
 
 let obj = {
   name : "john",
   age : 30,

 };

 let map = new Map(Object.entries(obj));
 alert(map.get("name"));
 