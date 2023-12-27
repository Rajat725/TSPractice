class Person7{

 fname;
 lname;
 lol;

constructor(fname,lname)
{
    this.fname=fname;
    this.lname=lname;
}

display=()=>{console.log(this.fname+this.lname);}

}
let p4=new Person7("Rajat","Sharma");
p4.display();
console.log(p4.lol);