import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ElementRef } from "@angular/core";

import { ModalWindowService } from "../modal-window.service";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  @ViewChild("modalTemplate", { read: ViewContainerRef }) modalTemplate;

  subscription: Subscription;

  constructor(
    private modalWindowService: ModalWindowService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private elementRef: ElementRef
  ) {
    this.subscription = this.modalWindowService.getComponent().subscribe((component) => {
      this.showModal(component);
    });
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.display = "none";
  }

  showModal(component) {
    this.modalTemplate.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.name);
    this.modalTemplate.createComponent(componentFactory);
    this.elementRef.nativeElement.style.display = "block";
  }

  hideModal() {
    this.modalTemplate.clear();
    this.elementRef.nativeElement.style.display = "none";
  }

}
