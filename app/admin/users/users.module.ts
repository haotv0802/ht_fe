import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './users.component';
import {UsersService} from './users.service';
import {CommonModule} from '@angular/common';
import {Ng2SmartTableModule} from "ng2-smart-table";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/users', component: UsersComponent}
    ]),
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [UsersComponent],
  providers: [UsersService]
})
export class UsersModule {
}