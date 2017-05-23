import {NgModule} from "@angular/core";
import {AlertComponent} from "../common/modal/alert.component";
import {OpenDirective} from "../common/modal/open.component";
import {ModalComponent} from "./modal/modal.component";
import {CommonModule} from "@angular/common";
import {LoaderModalComponent} from "./modal/loaderModal/loader.modal.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    AlertComponent,
    OpenDirective,
    ModalComponent,
    LoaderModalComponent
  ],
  exports: [
    AlertComponent,
    OpenDirective,
    ModalComponent,
    LoaderModalComponent,
    CommonModule
  ],
  providers: []
})
export class HTCommonModule {
}