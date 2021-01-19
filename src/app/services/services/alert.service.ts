import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertShow = false;
  constructor() { }
  onOk() {
    this.alertShow = false;
  }
}
