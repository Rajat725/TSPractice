// Introduction to typescript programming
function canDrive(age:number)
{

    if(age>18)
    {
        console.log("Surely can drive");
    }
    if(age<18)
    {
        console.log("Sorry Can't Drive")
    }
    if(age==18)
    {
        console.log("On the Edge , Wait for One year");
    }
}
//Implement function
canDrive(28);
canDrive(18);
canDrive(10);
//canDrive("Lol"); Give error here