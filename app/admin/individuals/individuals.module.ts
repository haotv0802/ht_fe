import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {IndividualsComponent} from "./individuals.component";
import {IndividualsService} from "./individuals.service";
import {IndividualDetailsService} from "./individualDetails.service";
import {IndividualDetailsComponent} from "./individualDetails.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/individuals', component: IndividualsComponent},
      {path: 'admin/individuals/details', component: IndividualDetailsComponent}
    ]),
    CommonModule
  ],
  declarations: [IndividualsComponent, IndividualDetailsComponent],
  providers: [IndividualsService, IndividualDetailsService]
})
export class IndividualsModule {
}