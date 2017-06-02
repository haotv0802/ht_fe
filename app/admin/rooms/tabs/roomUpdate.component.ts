import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl, ValidatorFn} from "@angular/forms";
import "rxjs/add/operator/debounceTime";

@Component({
  moduleId: module.id,
  templateUrl: 'roomUpdate.component.html'
})
export class IndividualUpdateComponent implements OnInit {
  pageTitle: string;
  roomForm: FormGroup;

  constructor(
              private _router: Router,
              private fb: FormBuilder
  ) {
    this.pageTitle = 'Individual Update';
  }

  ngOnInit(): void {
    this.roomForm = this.fb.group({
      roomName: ['', [Validators.required, Validators.minLength(20)]],
      numOfPeople: ['', [Validators.required, Validators.minLength(3)]],
      numOfBeds: ['', [Validators.required, Validators.minLength(3)]],
      typeOfBeds: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

}