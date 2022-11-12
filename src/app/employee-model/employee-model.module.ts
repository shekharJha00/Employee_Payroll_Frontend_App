import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeModelModule { 
  

    name:String ="";
    salary:Number =3000;
    note:String ="";
    startDate: Date;
    department:Array<any>=[];
    gender:String ="";
    profilePic:String ="";


    constructor(name:String,salary:Number,note:String,startDate: Date,
      department:Array<any>,gender:String ,profilePic:String){
          this.name = name;
          this.salary = salary;
          this.note = note;
          this.startDate = startDate;
          this.department =department;
          this.gender = gender;
          this.profilePic=profilePic;
      
      
        }

    
}




