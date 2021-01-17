import { Injectable } from '@angular/core';

@Injectable()
export class ModelService {

  items: any[] = [];

  storage: any = window.localStorage;
  
  readonly KEY: string = "ITEMS";

  constructor() { }

  save(data: any){
    let dataStr = JSON.stringify(data);
    this.storage.setItem(this.KEY, dataStr);
  }

  // Получаю из locala Storage
  load(){
    let dataStr = this.storage.getItem(this.KEY);
    return dataStr ? JSON.parse(dataStr) : []; //превращение JSON в JS объект
  }
  

}
