import {Component, OnInit, ViewChild, OnDestroy} from "@angular/core";
import {RoomType} from "./roomType";
import {RoomsService} from "./rooms.service";
import {Image} from "./image";
import {RoomImagesService} from "./roomImages.service";
import {Router} from "@angular/router";
import {ModalComponent} from "../../common/modal/modal.component";
import {RoomTabsComponent} from "./tabs/roomTabs.component";
import {RoomUpdateService} from "./tabs/roomUpdate.service";
import {Observable, Subscription} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  templateUrl: 'rooms.component.html'
  // templateUrl: 'app/admin/rooms/rooms.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class RoomsComponent implements OnInit, OnDestroy {

  pageTitle: string;
  roomTypes: RoomType[];
  private sub: Subscription;
  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(
    private _roomService: RoomsService,
    private _roomImagesService: RoomImagesService,
    private _router: Router,
    private _roomUpdateService: RoomUpdateService
  ) {
    this.pageTitle = 'Room Management';
    // this.getRoomTypes();
  }

  ngOnInit(): void {
    let timer = Observable.interval(1000);
    this.sub = timer.subscribe(
      () => {
        this.getRoomTypes();
      }
    )
    ;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getRoomTypes(): void {
    console.log("get room Types");
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

  editRoom(roomType: RoomType) {
    // this.modal.modalTitle = "Room Tabs";
    this.modal.modalHeader = false;
    this.modal.modalFooter = false;
    this.modal.modalMessage = true;
    this.modal.documentWidth = 700;
    // this.modal.message = "Here Users Update component will load.";
    this.modal.open(RoomTabsComponent);
    this._roomUpdateService.roomType = roomType;
  }

  counter(length: number){
    return new Array(length);
  }
}
