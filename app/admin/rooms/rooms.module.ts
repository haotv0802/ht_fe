import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RoomsComponent} from './rooms.component';
import {RoomsService} from './rooms.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/rooms', component: RoomsComponent}
    ]),
    CommonModule
  ],
  declarations: [RoomsComponent],
  providers: [RoomsService]
})
export class RoomsModule {
}