import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-Payroll';
  router: any;
  goHome(){
    this.router.navigate([""])
  }
}
