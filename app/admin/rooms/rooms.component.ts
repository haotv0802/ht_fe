import {Component, OnInit}  from '@angular/core';
import {RoomType} from "./roomType";
import {RoomsService} from "./rooms.service";

@Component({
  templateUrl: 'app/admin/rooms/rooms.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class RoomsComponent implements OnInit {
  pageTitle: string;
  roomTypes: RoomType[];
  constructor(private _roomService: RoomsService) {
    this.pageTitle = 'Room component';
  }

  ngOnInit(): void {
    // this.getUsers();
  }

  getRoomTypes(): void {
    console.log("get room Types");
    this._roomService.getRoomTypes().subscribe(
      (roomTypes) => {
        // console.log("get users: ----");
        // console.log(res);
        this.roomTypes = roomTypes;
        console.log(this.roomTypes);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
