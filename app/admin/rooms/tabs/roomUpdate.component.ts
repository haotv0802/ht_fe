import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl, ValidatorFn} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import {RoomUpdateService} from "./roomUpdate.service";
import {RoomType} from "../roomType";

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
      numOfPeople: ['', [Validators.required, Validators.minLength(3)]],
      numOfBeds: ['', [Validators.required, Validators.minLength(3)]],
      typeOfBeds: ['', [Validators.required, Validators.minLength(20)]]
    });

    this.populateData();
  }

  populateData(): void {
    this.roomForm.patchValue({
      roomName: this.roomType.name,
      numOfPeople: this.roomType.numOfPeople,
      numOfBeds: this.roomType.numOfBeds
    });
  }

  counter(length: number){
    return new Array(length);
  }
}