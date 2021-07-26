import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ParentComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  value?: string;
  reg = this.fb.group({
    name: [''],
    password: [''],
  });
  name: any;

  onSubmit(): any {}

  // buttonStyle = 'style';

  // color: string = 'red';
  // bgColor: string = 'green';

  ngOnInit(): void {}
}
