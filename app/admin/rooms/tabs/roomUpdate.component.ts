import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl, ValidatorFn} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import {RoomUpdateService} from "./roomUpdate.service";
import {RoomType} from "../roomType";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'room-update',
  moduleId: module.id,
  templateUrl: 'roomUpdate.component.html'
})
export class RoomUpdateComponent implements OnInit {
  pageTitle: string;
  roomForm: FormGroup;
  roomType: RoomType;

  constructor(private _router: Router,
              private fb: FormBuilder,
              private _roomUpdateService: RoomUpdateService) {
    this.pageTitle = 'Individual Update';
  }

  ngOnInit(): void {
    this.roomType = this._roomUpdateService.roomType;
    console.log(this.roomType);
    this.roomForm = this.fb.group({
      roomName: ['', [Validators.required, Validators.minLength(3)]],
      numOfPeople: ['', [Validators.required]],
      numOfBeds: ['', [Validators.required]],
      typeOfBeds: ['', [Validators.required]]
    });

    this.populateData();
  }

  save() {
    // console.log(this.roomForm.value);
    // return false;
    this.updateRoomType();
  }

  populateData(): void {
    this.roomForm.patchValue({
      roomName: this.roomType.name,
      numOfPeople: this.roomType.numOfPeople,
      numOfBeds: this.roomType.numOfBeds,
      typeOfBeds: this.roomType.typeOfBed
    });
  }

  counter(length: number){
    return new Array(length);
  }

  updateRoomType(): void {
    this.roomType.name = this.roomForm.get("roomName").value;
    this.roomType.numOfBeds = this.roomForm.get("numOfBeds").value;
    this.roomType.numOfPeople = this.roomForm.get("numOfPeople").value;
    this.roomType.typeOfBed = this.roomForm.get("typeOfBeds").value;
    this._roomUpdateService.updateRoomType(this.roomType).subscribe(
      (response) => {
        console.log(response);
      },
      (error: any) => {
        console.log("Error happens at roomUpdate");
        console.log(error);
      }
    )
    ;
    this._roomUpdateService.modal.close();
  }
}