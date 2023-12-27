//Welcome to type assertions
//Use <> bracket
//Use as keyword
let bills:any=1234567;
console.log(bills);
console.log(typeof(bills));

let bill1=<number>bills;
console.log(bill1,typeof(bill1));

let bill2:any;
let bill3=bill2 as number;
bill3=256;
console.log(bill3);
let bill4=bill2 as string;
bill4="Rajat";
console.log(bill4);

function discount(b1:boolean):any{

    if(b1)
    {
        return "HEllo";
    }
    else
    {
        return 20;
    }
}
let az1=discount(true) as string;
let az2=discount(false) as number;
console.log(az1,az2);

