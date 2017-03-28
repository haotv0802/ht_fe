import {NgModule} from '@angular/core';
import {UsersModule} from './users/users.module';
import {RoomsModule} from './rooms/rooms.module';
import {ImagesModule} from "./images/images.module";
@NgModule({
  imports: [
    UsersModule,
    RoomsModule,
    ImagesModule
  ],
  declarations: [],
  providers: []
})
export class AdminModule {
}