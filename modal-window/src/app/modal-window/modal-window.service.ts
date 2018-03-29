import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ModalWindowService {

  private component$ = new Subject<any>();

  constructor(

  ) {  }

  loadModal(component) {
    this.component$.next({name: component});
  }

  getComponent(): Observable<any> {
    return this.component$.asObservable();
  }
}
