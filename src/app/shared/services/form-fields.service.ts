import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormFieldsService {

  constructor() { }
  dataModel(){
    const data={
      firstName:'vignesh',
      age:'19'
    }
    
    return data;
    
  }

  FormlyFieldConfig(){
    
    const data=[
        {
          key:'firstName',
          type:'input',
          templateOptions:{
            label:'first Name',
            placeholder:'Name',
            appearance:'outline'
          }
        },
        {
          key:'age',
          type:'input',
          templateOptions:{
            label:'age',
            type:'number',
            placeholder:'age',
            appearance:'outline'
          }
        }
    ]

      return data;
    }
    

}
