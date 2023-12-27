//Introductions USe Destruction Mechanism
let country:[string,number,boolean]=["Array",20,true];
for (const iterator of country) {
    console.log(iterator);
}
//Double Tuple
let country1:[boolean,number][]=[[true,20],[false,30]];
console.log(country1[0][0]);
//Push
let nam:[string,number]=["Raja",20];
nam.push("Lol");
nam.push(30);
nam.push(40);
console.log(nam);
