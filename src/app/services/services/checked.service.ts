import { Injectable } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Injectable({
  providedIn: 'root'
})
export class CheckedService {


  constructor(public task: TaskService) { }

  onChecked(index: number) {

    //получение ключа done объекта [index] и его проверка
    if(!this.task.items[index].done) { 
      this.task.items[index].done = true; 
      this.task.save(); //обновление задачи в local storage
    } else if(this.task.items[index].done) {
      this.task.items[index].done = false; 
      this.task.save(); //обновление задачи в local storage
    }
  }
}
