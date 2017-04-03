import {Component, OnInit} from "@angular/core";
import {Individual} from "./individual";
import {IndividualDetailsService} from "./individualDetails.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: 'individualDetails.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class IndividualDetailsComponent implements OnInit {
  individual: Individual;
  pageTitle: string;
  constructor(
    private _individualDetailsService: IndividualDetailsService,
    private _router: Router
  ) {
    this.pageTitle = 'Individual Details';
  }

  ngOnInit(): void {
    if (!this._individualDetailsService.individual) {
      this._router.navigate(["admin/individuals"]);
    }
    this.individual = this._individualDetailsService.individual;
  }

}
