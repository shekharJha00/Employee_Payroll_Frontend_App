import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModelModule } from 'src/app/employee-model/employee-model.module';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router,
              private service:EmployeeServiceService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
 
  employee:EmployeeModelModule=new EmployeeModelModule("",0,"",new Date, [],"", "")

  onSubmit(){
    console.log(this.employee)
    this.employee.department=this.tempArr;
    this.service.insertEmployee(this.employee).subscribe((data:any) =>{
      this.router.navigate([""])
    })
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
