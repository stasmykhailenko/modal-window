import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ModalWindowModule} from "./modal-window/modal-window.module";
import { MyComponentComponent } from './my-component/my-component.component';
import { ContentModalComponent } from './content-modal/content-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  entryComponents: [ ContentModalComponent ]
})
export class AppModule { }
