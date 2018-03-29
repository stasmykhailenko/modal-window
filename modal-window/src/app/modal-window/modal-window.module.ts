import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from "./modal-window.component";
import { ModalWindowService } from "./modal-window.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalWindowComponent
  ],
  providers: [
    ModalWindowService
  ],
  exports: [
    ModalWindowComponent
  ]
})
export class ModalWindowModule { }
