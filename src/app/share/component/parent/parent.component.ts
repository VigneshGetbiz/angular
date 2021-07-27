import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ParentComponent implements OnInit {

  form!:FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['',Validators.required],
      lastName: [''],
     
    });
  }
  onSubmit(): any {
    console.log(this.form.value);
    
  }
  reset(){
    this.form.reset;
  }

  // buttonStyle = 'style';

  // color: string = 'red';
  // bgColor: string = 'green';

  ngOnInit(): void {}
}
