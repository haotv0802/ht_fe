import {Component, OnInit, HostListener, Inject} from "@angular/core";
import {Individual} from "./individual";
import {IndividualsService} from "./individuals.service";
import {IndividualDetailsService} from "./individualDetails.service";
import {Router} from "@angular/router";
import {IndividualUpdateService} from "./individualUpdate.service";
import {Pagination} from "../../common/pagination";
import {Observable} from "rxjs/Rx";
import {DOCUMENT} from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  templateUrl: 'individuals.component.html',
  styleUrls: ['individual.bubbling.component.css']
})
export class IndividualsComponent implements OnInit {
  pageTitle: string;
  individuals: Individual[];
  individualsALL: Individual[];
  pagination: Pagination;
  individualsCount: number;
  isShown: boolean = true;

  constructor(
    private _individualService: IndividualsService,
    private _individualDetailsService: IndividualDetailsService,
    private _individualUpdateService: IndividualUpdateService,
    private _router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.pageTitle = 'Individual List';
  }

  ngOnInit(): void {
    this.getIndividuals(0);
    this.getAllIndividuals();
  }

  getAllIndividuals(): void {
    let timer = Observable.interval(5000);
    // subscribing to a observable returns a subscription object
    timer.subscribe(
      () => {
        this._individualService.getIndividuals().subscribe(
          (individuals) => {
            this.individualsALL = individuals;
            this.isShown = false;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    );
  }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   let number = this.document.body.scrollTop;
  //   console.log("number: " + number);
  // }

  getIndividuals(pageNum: number) {
    Observable.forkJoin(
      this._individualService.getIndividualsCount(),
      this._individualService.getIndividualsWithPaging(pageNum)
    ).subscribe(
      (data) => {
        this.individualsCount = data[0];
        this.individuals = data[1].content;
        this.pagination = new Pagination(data[1], this.individualsCount);
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
    return new Array(length);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    console.log(event);
  }

}
