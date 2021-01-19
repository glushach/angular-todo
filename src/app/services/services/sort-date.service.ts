import { Injectable } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Injectable({
  providedIn: 'root'
})
export class SortDateService {

  constructor(public task: TaskService) { }

  onDateNew() {
    this.task.items.sort((a, b)=> b.date - a.date)
    this.task.save(); //обновление массива в local storage
  }

  onDateOld() {
    this.task.items.sort((a, b)=> a.date - b.date)
    this.task.save(); //обновление массива в local storage
  }
}
