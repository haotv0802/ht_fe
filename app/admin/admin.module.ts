import {NgModule} from '@angular/core';
import {UsersModule} from './users/users.module';
import {RoomsModule} from './rooms/rooms.module';
@NgModule({
  imports: [
    UsersModule,
    RoomsModule
  ],
  declarations: [],
  providers: []
})
export class AdminModule {
}