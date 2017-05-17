import {Component, OnInit} from "@angular/core";
import {Individual} from "./individual";
import {IndividualsService} from "./individuals.service";
import {IndividualDetailsService} from "./individualDetails.service";
import {Router} from "@angular/router";
import {IndividualUpdateService} from "./individualUpdate.service";
import {Pagination} from "../../common/pagination";
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  templateUrl: 'individuals.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class IndividualsComponent implements OnInit {
  pageTitle: string;
  individuals: Individual[];
  pagination: Pagination;
  individualsCount: number;

  constructor(
    private _individualService: IndividualsService,
    private _individualDetailsService: IndividualDetailsService,
    private _individualUpdateService: IndividualUpdateService,
    private _router: Router
  ) {
    this.pageTitle = 'Individual List';
  }

  ngOnInit(): void {
    this.getIndividuals(0);
  }

  getIndividuals(pageNum: number) {
    Observable.forkJoin(
      this._individualService.getIndividualsCount(),
      this._individualService.getIndividualsWithPaging(pageNum)
    ).subscribe(
      (data) => {
        this.individualsCount = data[0];
        this.individuals = data[1].content;
        this.pagination = new Pagination(data[1], this.individualsCount);
        console.log("individualsCount: ");
        console.log(this.individualsCount);
        console.log("individuals: ");
        console.log(this.individuals);
        console.log("pagination: ");
        console.log(this.pagination);
      },
      (error: any) => {
        console.log(error);
      }
    )
    ;
    return false;
  }

  displayIndividual(individual: Individual) : void {
    this._individualDetailsService.individual = individual;
    this._router.navigate(["admin/individuals/details"]);
  }

  editIndividual(individual: Individual) : void {
    this._individualUpdateService.individual = individual;
    this._router.navigate(["admin/individuals/update"]);
  }
  addIndividual() {
    this._router.navigate(["admin/individuals/add"]);
    return false;
  }

  counter(length: number){
    console.log("counter: " + length);
    return new Array(length);
  }
}
