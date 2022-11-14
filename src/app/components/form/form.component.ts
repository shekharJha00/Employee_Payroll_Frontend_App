import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModelModule } from 'src/app/employee-model/employee-model.module';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data:any;
  
  id:Number = 0;


  constructor(private router:Router,
              private service:EmployeeServiceService,
              public update:HomeComponent,
              private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    if(this.service.id != 0){
      this.employee = this.service.employeeUp;
    }
  }
   employee:EmployeeModelModule = new EmployeeModelModule("",0,"",new Date, [],"", "")
  
  onSubmit(){
    if(this.service.id != 0){
      this.employee.department=this.tempArr;
    this.service.updateById(this.service.id,this.service.employeeUp).subscribe((data:any) =>{alert("Employee Added Successfully")
      console.log(data);
      this.router.navigate([""])
      this.service.updateData(0,null)
    })
    }
    else{
      console.log(this.employee)
    this.employee.department=this.tempArr;
    this.service.insertEmployee(this.employee).subscribe((data:any) =>{
      this.router.navigate([""])
    })
    }
    
  }

  deptName: any;
emps:any = "";
allEmp : Array<any>=[];  
tempArr : Array<any> = [];
depart2: any = ["HR", "Sales", "Engineer", "Finance", "Other"];
checkBoxChange(dptname:any){

    if(!this.tempArr.includes(dptname)){
      this.tempArr.push(dptname);
    }
    else{
      const index = this.tempArr.indexOf(dptname);
      if (index > -1) { 
        this.tempArr.splice(index, 1); 
      }
    }
  }
}
