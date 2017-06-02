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

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/rooms', component: RoomsComponent},
      {path: 'admin/roomImages', component: RoomImagesComponent}
    ]),
    CommonModule,
    HTCommonModule
  ],
  declarations: [
    RoomsComponent,
    RoomImagesComponent,
    RoomTabsComponent
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