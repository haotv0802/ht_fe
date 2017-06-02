import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {RoomsComponent} from "./rooms.component";
import {RoomImagesComponent} from "./roomImages.component";
import {RoomsService} from "./rooms.service";
import {RoomImagesService} from "./roomImages.service";
import {CommonModule} from "@angular/common";
import {RoomTabsComponent} from "./tabs/roomTabs.component";
import {HTCommonModule} from "../../common/htCommon.module";
import {RoomTabsService} from "./tabs/roomTabs.service";
import {ModalComponent} from "../../common/modal/modal.component";
import {RoomUpdateComponent} from "./tabs/roomUpdate.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/rooms', component: RoomsComponent},
      {path: 'admin/roomImages', component: RoomImagesComponent}
    ]),
    CommonModule,
    HTCommonModule,
    ReactiveFormsModule // for FormBuilder, FormGroup, Form-related items...
  ],
  declarations: [
    RoomsComponent,
    RoomImagesComponent,
    RoomTabsComponent,
    RoomUpdateComponent
  ],
  providers: [
    RoomsService,
    RoomImagesService,
    RoomTabsService
  ],
  entryComponents: [ModalComponent, RoomTabsComponent]
})
export class RoomsModule {
}