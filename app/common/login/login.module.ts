import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginService} from './login.service';
import {LoginComponent} from './login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'login', component: LoginComponent}
    ])
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}