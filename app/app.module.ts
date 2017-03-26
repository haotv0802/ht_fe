import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent}  from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {StaffComponent} from './staff/staff.component';
import {NavComponent} from './nav.component';

import {LoginModule} from './common/login/login.module';

import {AdminModule} from './admin/admin.module';
/* Feature Modules */
import {ProductModule} from './products/product.module';

import {Constants} from './common/constant';
import {HTTPService} from "./common/HTTP.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      // {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    RouterModule.forChild([
      {path: 'staff', component: StaffComponent}
    ]),
    LoginModule,
    ProductModule,
    AdminModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    StaffComponent,
    NavComponent
  ],
  providers: [
    Constants,
    HTTPService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
