import { Injectable } from '@angular/core';
import { TaskService } from '../task.service';

@Injectable({
  providedIn: 'root'
})
export class SortPriorService {

  constructor(public task: TaskService) { }

  onPriorTop() {
    this.task.items.sort((a, b)=> b.prior - a.prior)
    this.task.save(); //обновление массива в local storage
  }

  onPriorBottom() {
    this.task.items.sort((a, b)=> a.prior - b.prior)
    this.task.save(); //обновление массива в local storage
  }
}
