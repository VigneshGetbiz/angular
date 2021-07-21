import { Component, OnInit,NgModule } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  constructor() { }
  radio:any; 
  // radi:any; 
  // radio1:any; 
  name:string='Radio Button'; 
  gender:any; 
  c:any;
  sel: any; 

  log(){
  console.log(this.sel);

  }
  
  ngOnInit(): void {
    this.radio=1;


  }

}
