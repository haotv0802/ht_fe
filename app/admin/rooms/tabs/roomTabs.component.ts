import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {RoomTabsService} from "./roomTabs.service";
import {ModalComponent} from "../../../common/modal/modal.component";

@Component({
  moduleId: module.id,
  templateUrl: 'roomTabs.component.html'
})
export class RoomTabsComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(
    private _roomTabsService: RoomTabsService,
    private _router: Router,
    private _modal: ModalComponent
  ) {
  }

  close(): void {
    this._modal.close();
  }
}
