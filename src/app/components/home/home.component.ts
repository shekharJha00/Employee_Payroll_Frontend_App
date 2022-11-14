import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModelModule } from 'src/app/employee-model/employee-model.module';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private router:Router,
    private service:EmployeeServiceService,
    
  ) { }

  list:any;
  count : Number = 0;
  public employeeUpdate:EmployeeModelModule = new EmployeeModelModule("",0,"",new Date, [],"", "")
  ngOnInit(): void {
    this.service.getAllEmployee().subscribe((data:any) =>{
      console.log(data);
      this.list= data.data;
      this.count = this.list.length;
    });
   
  }
  onDelete(id : Number){
    console.log(id);
    this.service.deleteById(id).subscribe((data:any) =>{
      console.log(data);
      this.ngOnInit();
    })
  }
   id:Number = 0;

   onUpdate(empId:Number,employeeUp:EmployeeModelModule){
    console.log(empId,employeeUp)
    this.service.updateData(empId,employeeUp);
    this.router.navigate(["form"]);
    
  }
  }

