import { Injectable } from '@angular/core';
import { TaskService } from '../task.service';

@Injectable({
  providedIn: 'root'
})
export class SortCheckedService {

  constructor(public task: TaskService) { }

  onChecked() {
    this.task.items.sort((a, b)=> a.done - b.done)
    this.task.save(); //обновление массива в local storage
  }
}
