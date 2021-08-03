import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormFieldsService } from 'src/app/shared/services/form-fields.service';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.css']
})
export class FormlyComponent {

  constructor(private fb:FormBuilder,private formFieldsSerices:FormFieldsService){}

  form=this.fb.group({});

  model=this.formFieldsSerices.dataModel();

  fields: FormlyFieldConfig[]=this.formFieldsSerices.FormlyFieldConfig()
}
