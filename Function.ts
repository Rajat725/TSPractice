//Functions
function add(a:number,b:number):number
{
    return a+b;
}
console.log(add(5,10));
console.log("********************");
//void type
function mssg(mess:string):void
{
    console.log("Hello "+mess+" World");
}
mssg("Rajat");
console.log("********************");
//optional parameters
function add1(a:number,b:number,c:number=10,e?:number):number
{
    return a+b+c+e;
}
console.log(add1(10,20));
console.log("********************");
//Class usage
class Person{

     fname:string;
     lname:string;

    constructor(fname,lname)
    {
        this.fname=fname;
        this.lname=lname;
    }

    display=()=>{console.log(this.fname+this.lname);}
}
let p=new Person("Rajat","Sharma");
p.display();
console.log("********************");

