import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

const commonModule = [
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
];
@NgModule({
  imports: [commonModule],
  exports: [commonModule],
})
export class CommonModule {}
