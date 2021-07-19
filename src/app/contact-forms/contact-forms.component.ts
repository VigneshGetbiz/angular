import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupName,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-contact-forms',
  templateUrl: './contact-forms.component.html',
  styleUrls: ['./contact-forms.component.css'],
})
export class ContactFormsComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  // formControl
  // fn = new FormControl('');
  // ln = new FormControl('');
  // age = new FormControl('');
  // mob = new FormControl('');
  // setValue(): any {
  //   console.log('First Name :: ', this.fn.value);
  //   console.log('Last Name :: ', this.ln.value);
  //   console.log('Age :: ', this.age.value);
  //   console.log('Moble No :: ', this.mob.value);
  // }
  // -------------------------------------------------------------

  // Form Group

  // fg = new FormGroup({
  //   fn: new FormControl('', Validators.required),
  //   ln: new FormControl(''),
  //   age: new FormControl(''),
  //   mob: new FormControl(''),
  //   address: new FormGroup({
  //     address1: new FormControl('', Validators.required),
  //     address2: new FormControl(''),
  //     state: new FormControl(''),
  //     pin: new FormControl(''),
  //   }),
  // });
  // value: any;
  // onSubmit(): any {
  //   console.log(this.fg.value);

  //   console.log(this.fg.get('address.address1')?.value);
  // }

  // -------------------------------------------------------------

  // Form Bilder

  // contactForm = this.fb.group({
  //   fn: ['', Validators.required],
  //   ln: [''],
  //   age: [''],
  //   mob: ['', Validators.maxLength(10)],
  //   address: this.fb.group({
  //     address1: ['', Validators.required],
  //     address2: [''],
  //     state: [''],
  //     pin: [''],
  //   }),
  // });

  // onSubmit(): any {
  //   console.log(this.contactForm.controls);
  // }
  // ------------------------------------------------------------

  // formArray

  dynamicForm: any = this.fb.group({
    mobile: this.fb.array([new FormControl('')]),
  });

  add(): any {
    const add = this.dynamicForm.get('mobile') as FormArray;
    add.push(
      this.fb.group({
        mobileNo: [''],
      })
    );
  }
  remove(): any {
    const add = this.dynamicForm.get('mobile') as FormArray;
    add.removeAt(1);
  }

  onSubmit(): any {
    console.log('');
  }

  ngOnInit(): void {}
}
