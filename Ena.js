//Enums Usage
var Cars;
(function (Cars) {
    Cars[Cars["BMW"] = 0] = "BMW";
    Cars[Cars["MErc"] = 1] = "MErc";
    Cars[Cars["Toyota"] = 2] = "Toyota";
})(Cars || (Cars = {}));
var man;
man = Cars.BMW;
console.log(man);
console.log("'''''''''''''''''''''''''''''''");
var Browsers;
(function (Browsers) {
    Browsers["Chrome"] = "ChromeHere";
    Browsers["Edge"] = "EdgeHere";
})(Browsers || (Browsers = {}));
console.log(Cars.BMW);
console.log(Cars.MErc);
console.log(Cars.Toyota);
console.log(Browsers.Chrome);
console.log(Browsers.Edge);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
// currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
