import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalWindowModule } from "./modal-window/modal-window.module";
import { AppComponent } from './app.component';
import { ContentModalComponent } from './content-modal/content-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentModalComponent
  ],
  imports: [
    BrowserModule,
    ModalWindowModule
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    ContentModalComponent
  ]
})
export class AppModule { }
