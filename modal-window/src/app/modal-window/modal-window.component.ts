import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

import { ModalWindowService } from "../modal-window.service";
import { ContentModalComponent } from "../content-modal/content-modal.component";


@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  @ViewChild("modalTemplate", { read: ViewContainerRef }) modalTemplate;

  visible: boolean;

  constructor(
    public modalWindowService: ModalWindowService
  ) { }

  ngOnInit() {
    this.modalWindowService.loadModal(this.modalTemplate, ContentModalComponent);
    this.visible = true;
  }

  hideModal() {
    this.modalTemplate.clear();
    this.visible = false;
  }

}
