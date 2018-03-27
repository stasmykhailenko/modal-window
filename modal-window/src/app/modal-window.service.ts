import { Injectable } from '@angular/core';
import { ComponentFactoryResolver } from "@angular/core";




@Injectable()
export class ModalWindowService {

  // @ViewChild("modalWindow", { read: ViewContainerRef }) modalWindow;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  loadModal(modalWindow, component) {
    modalWindow.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    modalWindow.createComponent(componentFactory)
  }

}
