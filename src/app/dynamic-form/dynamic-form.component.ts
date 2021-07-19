import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  Validator,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  form: any;
  arr!: FormArray;
  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.form = this.fb.group({
      arr: this.fb.array([new FormControl('')]),
    });
  }
  add(): any {
    const add = this.form.get('arr') as FormArray;
    add.push(
      this.fb.group({
        des: [''],
        dept: [''],
        com: [''],
      })
    );
  }
  remove(index: any): any {
    const add = this.form.get('arr') as FormArray;
    add.removeAt(index);
  }

  save(): any {
    console.log(this.form.get('arr').value);
  }

  // df = this.fb.group({
  //   des: ['', Validators.required],
  //   dept: [''],
  //   com: [''],
  // });

  // dynamic = this.fb.group({

  //   des: this.fb.array([this.fb.control('', Validators.required)]),
  //   dept: this.fb.array([this.fb.control('')]),
  //   com: this.fb.array([this.fb.control('')]),
  // });

  // onSubmit() {
  //   console.log(this.df.value);
  //   console.log(this.df.controls['des'].value);
  // }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        des: this.form.controls['des'].value,
        dept: this.form.controls['dept'].value,
        com: this.form.controls['com'].value,
      },
    });
  }

  ngOnInit(): void {}
}
