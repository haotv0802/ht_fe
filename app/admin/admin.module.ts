import {NgModule} from '@angular/core';
import {UsersModule} from './users/users.module';
import {RoomsModule} from './rooms/rooms.module';
import {ImagesModule} from "./images/images.module";
import {IndividualsModule} from "./individuals/individuals.module";
import {DomainService} from "./common/domain.service";

@NgModule({
  imports: [
    UsersModule,
    RoomsModule,
    ImagesModule,
    IndividualsModule
  ],
  declarations: [],
  providers: [DomainService]
})
export class AdminModule {
}