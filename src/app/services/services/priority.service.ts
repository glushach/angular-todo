import { Injectable } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(public task: TaskService) { }


  increase(index: number) {
    if(this.task.items[index].prior < 10) {
      console.log(this.task.items[index].prior++);
      this.task.save(); //обновление задачи в local storage
    }
  }

  decrease(index: number) {
    if(this.task.items[index].prior > 1) {
      console.log(this.task.items[index].prior--);
      this.task.save(); //обновление задачи в local storage
    }
  }

}
