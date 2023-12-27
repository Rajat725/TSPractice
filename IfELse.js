//If else
var a = 20, b = 30, c = 7;
if (a > b && a > c) {
    console.log("A :: ".concat(a, " is greater"));
}
else if (b > a && b > c) {
    console.log("B :: ".concat(b, " is greater"));
}
else {
    console.log("C :: ".concat(c, " is greater"));
}
//Ternarny operator
//Condition?Option1:Option2
var res = (a > b && a > c) ? a : ((b > c) ? b : c);
console.log(res);
