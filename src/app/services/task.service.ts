import { Injectable } from '@angular/core';
import { ModelService } from './model.service';
import { BehaviorSubject } from 'rxjs';

// Сервис по добавлению и удалению задач

@Injectable()
export class TaskService {
  search = ''; //для поисковой строки

  activeConfirm: boolean = false; //регулирует появление confirm
  answearConfirm: boolean = false //регулирует ответ пользователя
  indexOfComfirm: number;

  public items: any[] = [];


  private subj: BehaviorSubject<any> = new BehaviorSubject([]);



  constructor(
    private model: ModelService
  ) {
    this.load();
  }



// поток
  get todos() {
    return this.subj.asObservable();
  }

  add(task: string) {
    this.items.unshift({
      date: Date.now(),
      prior: 1,
      text: task,
      done: false
  });
    this.subj.next(this.items);
    this.save();
  }

  // Обработка ответа YES из confirm
  remove(index: any) {
    this.items.splice(index, 1); //передача indexOfComfirm из onConfirm
    // console.log(index);
    this.subj.next(this.items);
    this.save();
    this.activeConfirm = false;
  }

  load() {
    this.items = this.model.load(); //получение данных из local storage
    this.subj.next(this.items);
  }

  
  save() {
    this.model.save(this.items); // Обновление данных в local storage
  }

  // Для вызова модального окна confirm и обработки ответа NO
  onConfirm(index: number) {
    this.activeConfirm = true;
    this.indexOfComfirm = index; //получение индекса задачи
    // console.log(this.indexOfComfirm); 
  }
  onNo() {
    this.activeConfirm = false;
  }
}
