import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent}  from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {LoginComponent} from './common/login/login.component';
import {StaffComponent} from './staff/staff.component';
import {NavComponent} from './nav.component';

// import {LoginService} from './common/login/login.service';
import {LoginModule} from './common/login/login.module';
import {LogoutModule} from './common/logout/logout.module';
import {UsersModule} from './admin/users/users.module';

/* Feature Modules */
import {ProductModule} from './products/product.module';

import {Constants} from './common/constant';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    // RouterModule.forRoot([
    //   {path: 'login', component: LoginComponent},
    //   {path: '', redirectTo: 'login', pathMatch: 'full'},
    //   {path: '**', redirectTo: 'login', pathMatch: 'full'}
    // ]),
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      // {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    RouterModule.forChild([
      {path: 'staff', component: StaffComponent}
    ]),
    LoginModule,
    LogoutModule,
    ProductModule,
    UsersModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    StaffComponent,
    NavComponent
  ],
  providers: [
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
