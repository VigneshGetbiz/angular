import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MenuComponent } from './menu/menu.component';
import { IconComponent } from './icon/icon.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BadgeComponent } from './badge/badge.component';
import { MaterialModule } from '../material/material.module';

const shareComponent = [
  ButtonComponent,
  CheckboxComponent,
  InputComponent,
  RadioButtonComponent,
  SelectComponent,
  SnackbarComponent,
  MenuComponent,
  IconComponent,
  TextareaComponent,
  ExpansionPanelComponent,
  DialogComponent,
  DividerComponent,
  CardComponent,
  ParentComponent,
  ChildComponent,
  BadgeComponent,
];

@NgModule({
  declarations: [shareComponent],
  imports: [CommonModule, MaterialModule],
  exports: [shareComponent],
})
export class ShareModule {}
