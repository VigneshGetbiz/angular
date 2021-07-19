import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-contact-form',
  templateUrl: './dynamic-contact-form.component.html',
  styleUrls: ['./dynamic-contact-form.component.css'],
})
export class DynamicContactFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      mobile: new FormArray([new FormControl('')]),
    });
  }

  add(): any {
    const add = this.form.get('mobile') as FormArray;
    add.push(
      this.fb.group({
        mobileNo: [''],
      })
    );
  }

  remove(index: any): any {
    const add = this.form.get('mobile') as FormArray;
    add.removeAt(index);
  }

  getPhonesFormControls(): AbstractControl[] {
    return (<FormArray>this.form.get('mobile')).controls;
  }
  sendData(): any {
    console.log(this.form.value);
  }

  ngOnInit(): void {}
}
