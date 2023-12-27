//If else
let a:number=20,b:number=30,c:number=7;
if(a>b && a>c)
{
    console.log(`A :: ${a} is greater`);
}
else
if(b>a && b>c)
{

    console.log(`B :: ${b} is greater`);
}
else
{
    console.log(`C :: ${c} is greater`);
}
//Ternarny operator
//Condition?Option1:Option2
let res:number=(a>b && a>c)?a:((b>c)?b:c);
console.log(res);

