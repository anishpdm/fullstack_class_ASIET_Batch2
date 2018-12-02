class Student{
public name:String;
public rollno:number;

public setDetails(n:String,r:number)
{
this.name=n;
this.rollno=r;
}

}
const s=new Student();
s.setDetails("Rajesh",23);
console.log(s);


