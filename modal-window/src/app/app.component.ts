import { Component } from '@angular/core';

import { ModalWindowService } from "./modal-window.service";
import { ContentModalComponent } from "./content-modal/content-modal.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public modalWindowService: ModalWindowService
  ) { }

  ngOnInit() {
  }

  showModal() {
    this.modalWindowService.loadModal(ContentModalComponent);
  }
}
