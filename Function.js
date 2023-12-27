//Functions
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
console.log("********************");
//void type
function mssg(mess) {
    console.log("Hello " + mess + " World");
}
mssg("Rajat");
console.log("********************");
//optional parameters
function add1(a, b, c, e) {
    if (c === void 0) { c = 10; }
    return a + b + c + e;
}
console.log(add1(10, 20, 30, 40));
console.log("********************");
//Class usage
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        var _this = this;
        this.display = function () { console.log(_this.fname + _this.lname); };
        this.fname = fname;
        this.lname = lname;
    }
    return Person;
}());
var p = new Person("Rajat", "Sharma");
p.display();
console.log("********************");
