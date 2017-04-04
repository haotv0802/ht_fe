import {Component, OnInit} from "@angular/core";
import {Individual} from "./individual";
import {IndividualsService} from "./individuals.service";
import {Router} from "@angular/router";
import {IndividualUpdateService} from "./individualUpdate.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  moduleId: module.id,
  templateUrl: 'individualUpdate.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class IndividualUpdateComponent implements OnInit {
  pageTitle: string;
  individual: Individual;
  individualForm: FormGroup;

  constructor(
    private _individualService: IndividualsService,
    private _individualUpdateService: IndividualUpdateService,
    private _router: Router,
    private fb: FormBuilder
  ) {
    this.pageTitle = 'Individual Update';
  }

  ngOnInit(): void {
    this.individual = this._individualUpdateService.individual;
    console.log("In individual Update");
    console.log(this.individual);
    this.individualForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  save(): void {
    console.log('Saved: ' + JSON.stringify(this.individualForm.value));
  }

  populateTestData() {
    console.log('test data');
  }
}