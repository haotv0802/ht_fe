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
    // this.getIndividuals();
    // this.getIndividualsWithPaging();
    // this.getIndividualsCount();
    Observable.forkJoin(
      this._individualService.getIndividualsCount(),
      this._individualService.getIndividualsWithPaging(0)
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
  }

  getIndividuals(): void {
    this._individualService.getIndividuals().subscribe(
      (individuals) => {
        this.individuals = individuals;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getIndividualsWithPageNum(pageNum: number) {
    this._individualService.getIndividualsWithPaging(pageNum).subscribe(
      (slice) => {
        this.individuals = slice.content;
      },
      (error) => {
        console.log(error);
      }
    )
    return false;
  }

  // getIndividualsWithPaging(): void {
  //   this._individualService.getIndividualsWithPaging().subscribe(
  //     (slice) => {
  //       this.individuals = slice.content;
  //       this.pagination = new Pagination(slice, 0);
  //       console.log(this.pagination);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  // }

  getIndividualsCount(): void {
    this._individualService.getIndividualsCount().subscribe(
      (count) => {
        this.individualsCount = count;
        console.log("this.individualsCount");
        console.log(this.individualsCount);
      },
      (error) => {
        console.log(error);
      }
    )
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
