//Enums Usage
enum Cars{
BMW,
MErc,
Toyota
}

let man:Cars;
man=Cars.BMW;
console.log(man);
console.log("'''''''''''''''''''''''''''''''");
enum Browsers{
Chrome="ChromeHere",
Edge="EdgeHere"

}
console.log(Cars.BMW);
console.log(Cars.MErc);
console.log(Cars.Toyota);
console.log(Browsers.Chrome);
console.log(Browsers.Edge);

enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  let currentDirection = CardinalDirections.North;
  // logs 0
  console.log(currentDirection);
  // throws error as 'North' is not a valid enum
 // currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.