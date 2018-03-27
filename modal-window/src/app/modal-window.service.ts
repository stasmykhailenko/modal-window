import { Injectable } from '@angular/core';
import { ComponentFactoryResolver } from "@angular/core";

import { ModalWindowComponent } from "./modal-window/modal-window.component";


@Injectable()
export class ModalWindowService {


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  loadModal(modalWindow, component) {

    modalWindow.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    modalWindow.createComponent(componentFactory)
  }

  hideModal() {

  }

}
