import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {IndividualsComponent} from "./individuals.component";
import {IndividualsService} from "./individuals.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/individuals', component: IndividualsComponent}
    ]),
    CommonModule
  ],
  declarations: [IndividualsComponent],
  providers: [IndividualsService]
})
export class IndividualsModule {
}