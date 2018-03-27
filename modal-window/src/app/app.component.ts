import { Component, ViewChild } from '@angular/core';
import { ViewContainerRef } from "@angular/core";

import { ModalWindowService } from "./modal-window.service";
import { ContentModalComponent } from "./content-modal/content-modal.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("modalWindow", { read: ViewContainerRef }) modalWindow;

  constructor(
    // private componentFactoryResolver: ComponentFactoryResolver,
    public modalWindowService: ModalWindowService
  ) { }

  ngOnInit() {
  }

  showModal() {
    this.modalWindowService.loadModal(this.modalWindow, ContentModalComponent);
  }
}