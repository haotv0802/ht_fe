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

/* Feature Modules */
import {ProductModule} from './products/product.module';
import {AppService} from './app.service';

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
    ProductModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    StaffComponent,
    // AppService,
    NavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
