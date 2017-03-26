import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './users.component';
import {UsersService} from './users.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/users', component: UsersComponent}
    ]),
    CommonModule
  ],
  declarations: [UsersComponent],
  providers: [UsersService]
})
export class UsersModule {
}