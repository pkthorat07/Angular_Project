import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing4';
amount : number=5000;
panNo :any="any@75" ;
undef:any;
studentname="Pavan";
studmarks=107;
value=true;
myname="PavanThorat";
gender="Male";
city="Mumbai";

submit(){
  this.city="testing part";
}
}
