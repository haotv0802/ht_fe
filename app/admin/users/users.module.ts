import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './users.component';
import {UsersService} from './users.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/users', component: UsersComponent}
    ])
  ],
  declarations: [UsersComponent],
  providers: [UsersService]
})
export class UsersModule {
}