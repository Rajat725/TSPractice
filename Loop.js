//for loops
var nm = "HEllo How are you";
for (var _i = 0, nm_1 = nm; _i < nm_1.length; _i++) {
    var i = nm_1[_i];
    console.log(i);
}
var mn = [20, 30, 40];
for (var _a = 0, mn_1 = mn; _a < mn_1.length; _a++) {
    var item = mn_1[_a];
    console.log(mn);
}
for (var key in mn) {
    console.log(key + " :: " + mn[key]);
}
