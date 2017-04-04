import {Component, OnInit} from "@angular/core";

import {Individual} from "./individual";
import {IndividualsService} from "./individuals.service";
import {IndividualDetailsService} from "./individualDetails.service";
import {Router} from "@angular/router";
import {IndividualUpdateService} from "./individualUpdate.service";

@Component({
  moduleId: module.id,
  templateUrl: 'individuals.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class IndividualsComponent implements OnInit {
  pageTitle: string;
  individuals: Individual[];
  constructor(
    private _individualService: IndividualsService,
    private _individualDetailsService: IndividualDetailsService,
    private _individualUpdateService: IndividualUpdateService,
    private _router: Router
  ) {
    this.pageTitle = 'Individual List';
  }

  ngOnInit(): void {
    this.getIndividuals();
  }

  getIndividuals(): void {
    console.log("get individuals");
    this._individualService.getIndividuals().subscribe(
      (individuals) => {
        console.log("get individuals: ----");
        console.log(individuals);
        this.individuals = individuals;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  displayIndividual(individual: Individual) : void {
    console.log(individual);
    this._individualDetailsService.individual = individual;
    this._router.navigate(["admin/individuals/details"]);
  }

  editIndividual(individual: Individual) : void {
    console.log(individual);
    this._individualUpdateService.individual = individual;
    this._router.navigate(["admin/individuals/update"]);
  }
}
