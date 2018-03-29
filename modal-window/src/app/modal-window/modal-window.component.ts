import { Component, ComponentFactoryResolver, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ElementRef } from "@angular/core";
import { Renderer2 } from "@angular/core";

import { ModalWindowService } from "./modal-window.service";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnDestroy {

  @ViewChild("modalTemplate", { read: ViewContainerRef }) modalTemplate;

  subscription: Subscription;

  constructor(
    private modalWindowService: ModalWindowService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    this.subscription = this.modalWindowService.getComponent().subscribe((component) => {
      this.showModal(component);
    });
  }

  showModal(component) {
    this.modalTemplate.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.name);
    this.modalTemplate.createComponent(componentFactory);
    this.renderer.addClass(this.elementRef.nativeElement, 'visible');
  }

  hideModal() {
    this.modalTemplate.clear();
    this.renderer.removeClass(this.elementRef.nativeElement, 'visible');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
