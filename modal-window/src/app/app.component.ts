import { Component, ViewChild } from '@angular/core';
import { ContentModalComponent } from "./content-modal/content-modal.component";
import { ComponentFactoryResolver } from "@angular/core";
import { ViewContainerRef } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("modalWindow", { read: ViewContainerRef }) modalWindow;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  showModal() {
    this.modalWindow.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ContentModalComponent);
    this.modalWindow.createComponent(componentFactory);
  }
}
