import {Directive, ComponentFactoryResolver, ComponentRef, ViewContainerRef} from "@angular/core";
import {LoginModalComponent} from "./loginModal.component";
import {LoginModalService} from "./loginModal.service";
import {Router} from "@angular/router";
import {Constants} from "../constant";
import {FormBuilder} from "@angular/forms";

@Directive({
  selector: '[loginAnchor]'
})
export class LoginAnchorDirective {
  constructor(private viewContainer: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver,
              private loginService: LoginModalService,
              private _router: Router,
              private _constants: Constants,
              private fb: FormBuilder) {
  }

  createDialog(dialogComponent: {new(): LoginModalComponent}): ComponentRef<LoginModalComponent> {
    this.viewContainer.clear();

    let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(dialogComponent);
    let dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);

    dialogComponentRef.instance.close.subscribe(() => {
      dialogComponentRef.destroy();
    });

    return dialogComponentRef;
  }
}