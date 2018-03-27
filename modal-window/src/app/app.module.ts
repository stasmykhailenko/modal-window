import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContentModalComponent } from './content-modal/content-modal.component';
import { ModalWindowService } from "./modal-window.service";
import { ModalWindowComponent } from './modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentModalComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ModalWindowService ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    ContentModalComponent,
    ModalWindowComponent
  ]
})
export class AppModule { }
