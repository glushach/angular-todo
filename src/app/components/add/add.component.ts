import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  // @Output() onAdd = new EventEmitter()

  // newTask = ''

  constructor(private TaskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask(newText: HTMLInputElement) {
    if(newText.value.trim()) {
      this.TaskService.addTask({
        date: Date.now(),
        prior: 1,
        text: newText.value,
        done: false
    });
      newText.value = '';
    } else {
      alert('Empty task text!');
    }
  }

  // addTask() {
  //   if(this.newTask.trim()) {
  //       const newTask = this.newTask
  //       this.onAdd.emit(newTask)
  //     this.newTask = ''
  //   } else {
  //     alert('Empty task text!');
  //   }
  // }

}
