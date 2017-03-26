import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RoomsComponent} from './rooms.component';
import {RoomImagesComponent} from './roomImages.component';
import {RoomsService} from './rooms.service';
import {RoomImagesService} from './roomImages.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/rooms', component: RoomsComponent}
    ]),
    RouterModule.forChild([
      {path: 'admin/roomImages', component: RoomImagesComponent}
    ]),
    CommonModule
  ],
  declarations: [RoomsComponent, RoomImagesComponent],
  providers: [RoomsService, RoomImagesService]
})
export class RoomsModule {
}