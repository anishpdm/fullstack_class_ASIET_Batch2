import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome To Angular';
  myName='';
  myRoll:number=0;
  location:string='Ankamaly';
  status:boolean=false;


constructor(){
  setTimeout(() => {
    this.status=true;
  }, 10000);
}

onSubmit(form:NgForm){

this.myName=form.value.getName;
this.myRoll=form.value.getRoll;
if(this.myRoll==10)
{
  console.log('You are Eligible')
}
else{
  console.log('You are NOT Eligible')
}


}


clickme=()=>{
  this.status=false;
}


  getstatus()
  {
    return this.status;
  }
}
