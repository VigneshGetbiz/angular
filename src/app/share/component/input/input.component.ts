import { Component, OnInit, Input, forwardRef,OnDestroy,ChangeDetectionStrategy } from '@angular/core';
import {ControlValueAccessor,NG_VALUE_ACCESSOR,FormBuilder,FormGroup,Validators,FormControl,NG_VALIDATORS} from '@angular/forms';
import { Subscription } from 'rxjs';
export interface ProfileFormValues {
  firstName: string;
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor, OnDestroy  {
  @Input() appearance: any = 'fill';
  @Input() label: string = 'label';
  @Input() type: string = 'message';
  @Input() placeholder: string = 'placeholder';
  @Input() hint?: string;
  @Input() icon: string = 'sentiment_satisfied_alt';
  @Input() iconVisibility: string = 'block';
  @Input() ErrorMessage!: string;
  
  // -----------------------------------------------

  form!: FormGroup;
  subscriptions: Subscription[] = [];

  get value(): ProfileFormValues {
    return this.form.value;
  }

  set value(value: ProfileFormValues) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get name() {
    return this.form.controls.firstName;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required]
    });

    this.subscriptions.push(
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => {};
  onTouched: any = () => {};


  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(value : any) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn : any) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { profile: { valid: false } };
  }
 

}
