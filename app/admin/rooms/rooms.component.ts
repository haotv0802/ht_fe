import {Component, OnInit, ViewChild}  from '@angular/core';
import {RoomType} from "./roomType";
import {RoomsService} from "./rooms.service";
import {Image} from "./image";
import {RoomImagesService} from "./roomImages.service";
import {Router} from "@angular/router";
import {ModalComponent} from "../../common/modal/modal.component";
import {RoomTabsComponent} from "./tabs/roomTabs.component";

@Component({
  moduleId: module.id,
  templateUrl: 'rooms.component.html'
  // templateUrl: 'app/admin/rooms/rooms.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class RoomsComponent implements OnInit {
  pageTitle: string;
  roomTypes: RoomType[];
  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(private _roomService: RoomsService, private _roomImagesService: RoomImagesService, private _router: Router) {
    this.pageTitle = 'Room component';
    this.getRoomTypes();
  }

  ngOnInit(): void {
    // this.getUsers();
  }

  getRoomTypes(): void {
    // console.log("get room Types");
    this._roomService.getRoomTypes().subscribe(
      (roomTypes) => {
        // console.log("get users: ----");
        // console.log(res);
        this.roomTypes = roomTypes;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  displayImages(images: Image[]) {
    this._roomImagesService.images = images;
    this._router.navigate(['admin/roomImages']);
    return false;
  }

  editRoom() {
    // this.modal.modalTitle = "Room Tabs";
    this.modal.modalFooter = false;
    this.modal.modalMessage = true;
    // this.modal.message = "Here Users Update component will load.";
    this.modal.open(RoomTabsComponent);
  }

  counter(length: number){
    return new Array(length);
  }
}
