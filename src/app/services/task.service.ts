import { Injectable } from '@angular/core';
import { ModelService } from './model.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TaskService {

  activeConfirm: boolean = false; //регулирует появление confirm
  answearConfirm: boolean = false //регулирует ответ пользователя

  private items: any[] = [];


  private subj: BehaviorSubject<any> = new BehaviorSubject([]);

  indexOfComfirm: number;

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
    this.items = this.model.load();
    this.subj.next(this.items);
  }

  // Для редактирования задачи
  save() {
    this.model.save(this.items);
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
