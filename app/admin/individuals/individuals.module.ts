import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {IndividualsComponent} from "./individuals.component";
import {IndividualsService} from "./individuals.service";
import {IndividualDetailsService} from "./individualDetails.service";
import {IndividualDetailsComponent} from "./individualDetails.component";
import {IndividualDetailsGuard} from "./individualDetails-guard.service";
import {IndividualUpdateService} from "./individualUpdate.service";
import {IndividualUpdateComponent} from "./individualUpdate.component";
import {IndividualUpdateGuard} from "./individualUpdate-guard.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/individuals', component: IndividualsComponent},
      {
        path: 'admin/individuals/details',
        canActivate: [IndividualDetailsGuard],
        component: IndividualDetailsComponent
      },
      {
        path: 'admin/individuals/update',
        canActivate: [IndividualUpdateGuard],
        component: IndividualUpdateComponent
      },
    ]),
    CommonModule
  ],
  declarations: [
    IndividualsComponent,
    IndividualDetailsComponent,
    IndividualUpdateComponent
  ],
  providers: [
    IndividualsService,
    IndividualDetailsService,
    IndividualDetailsGuard,
    IndividualUpdateService,
    IndividualUpdateGuard
  ]
})
export class IndividualsModule {
}