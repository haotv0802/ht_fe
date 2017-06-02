import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl, ValidatorFn} from "@angular/forms";
import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'room-image-update',
  moduleId: module.id,
  templateUrl: 'roomImageUpdate.component.html'
})
export class RoomImageUpdateComponent implements OnInit {
  pageTitle: string;

  constructor(
              private _router: Router,
              private fb: FormBuilder
  ) {
    this.pageTitle = 'Individual Image Update';
    console.log("open room update!");
  }

  ngOnInit(): void {

  }

}