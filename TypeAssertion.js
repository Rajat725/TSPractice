//Welcome to type assertions
//Use <> bracket
//Use as keyword
var bills = 1234567;
console.log(bills);
console.log(typeof (bills));
var bill1 = bills;
console.log(bill1, typeof (bill1));
var bill2;
var bill3 = bill2;
bill3 = 256;
console.log(bill3);
var bill4 = bill2;
bill4 = "Rajat";
console.log(bill4);
function discount(b1) {
    if (b1) {
        return "HEllo";
    }
    else {
        return 20;
    }
}
var az1 = discount(true);
var az2 = discount(false);
console.log(az1, az2);
