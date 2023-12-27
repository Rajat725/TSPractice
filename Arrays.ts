//Arrays Intorduction
let cars:string[]=["BMw","Merc","Ferrari"];
console.log(cars);
//Multiple Values
let data:(string | number)[]=["Rajat",20,30,"Lol"];
console.log(data);
//Generics Types
let direction:Array<string|number>=["P2",20,30,"Pl"];
console.log(direction);
//for loop
for(let i=0;i<direction.length;i++)
{
    console.log(direction[i]);
}
//for in loop
for(let key in direction)
{
    console.log(direction[key]);
}
//for of loop
for (const iterator of direction) {
    console.log(iterator);
}