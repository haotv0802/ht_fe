import {NgModule} from "@angular/core";
import {AlertComponent} from "../common/modal/alert.component";
import {OpenDirective} from "../common/modal/open.component";
import {ModalComponent} from "./modal/modal.component";

@NgModule({
  imports: [
  ],
  declarations: [
    AlertComponent,
    OpenDirective,
    ModalComponent
  ],
  exports: [
    AlertComponent,
    OpenDirective,
    ModalComponent
  ],
  providers: []
})
export class HTCommonModule {
}