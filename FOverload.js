function mx1(a, b) {
    console.log(a, b);
}
mx1(20, 30);
mx1("Lol", "Sharma");
function mul(a) {
    if (typeof (a) === "number") {
        return a * a;
    }
    else {
        return a.map(function (e) { return e * e; });
    }
}
console.log(mul(5));
console.log(mul([20, 30]));
