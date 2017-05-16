import {NgModule} from "@angular/core";
import {AlertComponent} from "../common/modal/alert.component";
import {OpenDirective} from "../common/modal/open.component";

@NgModule({
  imports: [
  ],
  declarations: [
    AlertComponent,
    OpenDirective,
  ],
  exports: [
    AlertComponent,
    OpenDirective
  ],
  providers: []
})
export class HTCommonModule {
}