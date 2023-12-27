// Union Type Shit
let country:(string|boolean);
country=true;
console.log(typeof(country));
country="Lol";
console.log(typeof(country));
country=false;
console.log(typeof(country));
country="America";
console.log(typeof(country));
console.log(country);
//Arrays
let prize:(string|boolean)[]=["Rohan",true,"Mayank",false];
let castz:Array<string|boolean>=["Sharma",true];
console.log(prize);
console.log(castz);
//fucntions
function test(fname:string,lname:(string|boolean)):void{
console.log("HEllo Name is "+fname+"::"+lname);
}
test("Mayank","Sharma");
test("Rajat",true);
