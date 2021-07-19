import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DownloadComponent } from './download/download.component';
import { ShareComponent } from './share/share.component';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { AppConfigComponent } from './app-config/app-config.component';
import { ContactFormsComponent } from './contact-forms/contact-forms.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicContactFormComponent } from './dynamic-contact-form/dynamic-contact-form.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DownloadComponent,
    ShareComponent,
    PageNotFoudComponent,
    AppConfigComponent,
    ContactFormsComponent,
    DynamicFormComponent,
    DialogComponent,
    DynamicContactFormComponent,
    GoogleMapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsgCzsOxvUf79nxldljihQSQVmqdt059A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
