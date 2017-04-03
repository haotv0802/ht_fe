import {Component, OnInit} from "@angular/core";

import {Individual} from "./individual";
import {IndividualsService} from "./individuals.service";

@Component({
  moduleId: module.id,
  templateUrl: 'individuals.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class IndividualsComponent implements OnInit {
  pageTitle: string;
  individuals: Individual[];
  constructor(private _individualService: IndividualsService) {
    // this.pageTitle = 'User component';
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    console.log("get individualss");
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
}
