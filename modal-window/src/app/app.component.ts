import { Component, ViewChild } from '@angular/core';
import { ViewContainerRef } from "@angular/core";

import { ModalWindowService } from "./modal-window.service";
import { ContentModalComponent } from "./content-modal/content-modal.component";

import { ModalWindowComponent } from "./modal-window/modal-window.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("modalWindow", { read: ViewContainerRef }) modalWindow;

  constructor(
    public modalWindowService: ModalWindowService
  ) { }

  ngOnInit() {
  }

  showModal() {
    this.modalWindowService.loadModal(this.modalWindow, ModalWindowComponent);
  }
}
