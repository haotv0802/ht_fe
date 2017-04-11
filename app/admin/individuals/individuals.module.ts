import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {IndividualsComponent} from "./individuals.component";
import {IndividualsService} from "./individuals.service";
import {IndividualDetailsService} from "./individualDetails.service";
import {IndividualDetailsComponent} from "./individualDetails.component";
import {IndividualDetailsGuard} from "./individualDetails-guard.service";
import {IndividualUpdateService} from "./individualUpdate.service";
import {IndividualUpdateComponent} from "./individualUpdate.component";
import {IndividualUpdateGuard} from "./individualUpdate-guard.service";
import {ReactiveFormsModule} from "@angular/forms";
import {IndividualAddComponent} from "./individualAdd.component";
import {IndividualAddService} from "./individualAdd.service";
import {Login} from "./login/login";
import {Modal} from "../../common/modal/modal";
import {Open} from "../../common/modal/open.component";


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
      {path: 'admin/individuals/add', component: IndividualAddComponent},
    ]),
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    IndividualsComponent,
    IndividualDetailsComponent,
    IndividualUpdateComponent,
    IndividualAddComponent,
    Modal,
    Open,
    Login
  ],
  providers: [
    IndividualsService,
    IndividualDetailsService,
    IndividualDetailsGuard,
    IndividualUpdateService,
    IndividualUpdateGuard,
    IndividualAddService
  ]

})
export class IndividualsModule {
}