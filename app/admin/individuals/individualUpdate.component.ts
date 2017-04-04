import {Component, OnInit} from "@angular/core";
import {Individual} from "./individual";
import {IndividualsService} from "./individuals.service";
import {Router} from "@angular/router";
import {IndividualUpdateService} from "./individualUpdate.service";

@Component({
  moduleId: module.id,
  templateUrl: 'individualUpdate.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class IndividualUpdateComponent implements OnInit {
  pageTitle: string;
  individual: Individual;
  constructor(
    private _individualService: IndividualsService,
    private _individualUpdateService: IndividualUpdateService,
    private _router: Router
  ) {
    this.pageTitle = 'Individual Update';
  }

  ngOnInit(): void {
    this.individual = this._individualUpdateService.individual;
    console.log("In individual Update");
    console.log(this.individual);
  }

}