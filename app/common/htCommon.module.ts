import {NgModule} from "@angular/core";
import {AlertComponent} from "../common/modal/alert.component";
import {OpenDirective} from "../common/modal/open.component";
import {ModalComponent} from "./modal/modal.component";
import {LoaderComponent} from "./loader/loader.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [
    AlertComponent,
    OpenDirective,
    ModalComponent,
    LoaderComponent
  ],
  exports: [
    AlertComponent,
    OpenDirective,
    ModalComponent,
    LoaderComponent,
    CommonModule
  ],
  providers: []
})
export class HTCommonModule {
}