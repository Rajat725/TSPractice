function mx1(a:number,b:number);
function mx1(a:string,b:string);
function mx1(a:any,b:any)
{
    console.log(a,b);
}
mx1(20,30);
mx1("Lol","Sharma");
function mul(a:number):number;
function mul(a:number[]):number[];
function mul(a: number | number[]):any
{
    if(typeof(a)==="number")
    {
        return a*a;
    }
    else{
        return a.map(e=>e*e);
    }
    
}
console.log(mul(5));
console.log(mul([20,30]));
