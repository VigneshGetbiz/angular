import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { DownloadComponent } from './download/download.component';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';
import { AppConfigComponent } from './app-config/app-config.component';
import { ContactFormsComponent } from './contact-forms/contact-forms.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicContactFormComponent } from './dynamic-contact-form/dynamic-contact-form.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

import { AgmCoreModule } from '@agm/core';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { ShareFileComponent } from './shareFile/shareFile.component';

import { ShareModule } from './share/share.module';
import { MaterialModule } from './share/module/material.module';
import { CommonModule } from './share/module/common.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DownloadComponent,
    PageNotFoudComponent,
    AppConfigComponent,
    ContactFormsComponent,
    DynamicFormComponent,
    DialogComponent,
    DynamicContactFormComponent,
    GoogleMapsComponent,
    RadioButtonComponent,
    ShareFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    MaterialModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsgCzsOxvUf79nxldljihQSQVmqdt059A',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
