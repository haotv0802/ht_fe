import {NgModule} from "@angular/core";
import {AlertComponent} from "../common/modal/alert.component";
import {OpenDirective} from "../common/modal/open.component";
import {ModalComponent} from "./modal/modal.component";
import {CommonModule} from "@angular/common";
import {LoaderModalComponent} from "./modal/loaderModal/loader.modal.component";
import {LoaderComponent} from "./loader/loader.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    AlertComponent,
    OpenDirective,
    ModalComponent,
    LoaderModalComponent,
    LoaderComponent
  ],
  exports: [
    AlertComponent,
    OpenDirective,
    ModalComponent,
    LoaderModalComponent,
    CommonModule,
    LoaderComponent
  ],
  providers: []
})
export class HTCommonModule {
}