import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';
import { ShareFileComponent } from './shareFile/shareFile.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'share', component: ShareFileComponent },
  // { path: '**', component: PageNotFoudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
