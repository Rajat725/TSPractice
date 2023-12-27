//Arrays Intorduction
var cars = ["BMw", "Merc", "Ferrari"];
console.log(cars);
//Multiple Values
var data = ["Rajat", 20, 30, "Lol"];
console.log(data);
//Generics Types
var direction = ["P2", 20, 30, "Pl"];
console.log(direction);
//for loop
for (var i = 0; i < direction.length; i++) {
    console.log(direction[i]);
}
//for in loop
for (var key in direction) {
    console.log(direction[key]);
}
//for of loop
for (var _i = 0, direction_1 = direction; _i < direction_1.length; _i++) {
    var iterator = direction_1[_i];
    console.log(iterator);
}
