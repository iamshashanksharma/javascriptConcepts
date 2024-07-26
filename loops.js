/*
While loops :--

while(condition)
{
    statement
}

for(begin ; condition ; step){
    statement 
}

do{
    statements
}while(condition)

break and continue --- 

Break keyword : it breaks the whole loop 
continue keyword : as it name suggests it only skips the current execution 
*/
/*
let sum =0;
while(true)
{
    let value = +prompt("Enter a number", "");
    if(!value) break;
    sum+= value;
}
alert("sum" +sum);

for(let i =0;i<10;i++)
{
    if(i%2 ==0) continue;
    alert(i);
}
*/

let a =0;
while(++a < 5) alert(a);
let b =0;
while(b++ < 5) alert(b);

/*Explaination
1<5 -- 1
2<5 -- 2
3<5 -- 3
4<5 -- 4
5<5 -- false

2)  
0<5 --1
1<5 --2
2<5 --3
3<5 --4
4<5 --5
5<5 -- false

*/

/* switch statement
switch(X){
    case 'value1" : 
    ......
    break;
    case 'value2 :
    .....
    break;
    default:
    ....
    break;
}
x is checked with strict equality to 1 case then second case and so on
*/

let cond = 2+2;
switch(cond){
    case 3:
        alert("too small");
        break;
    case 4:
        alert("exactly");
        break;
    default:
        alert("don't know");
        break;        
}