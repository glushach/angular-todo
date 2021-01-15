import { Injectable } from '@angular/core';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[];
  constructor() {
    this.tasks = [];
  }

  getTasks() {
    if(!localStorage.getItem('tasks')) {
      return this.tasks;
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      return this.tasks;
    }
  }

  addTask(task: Task) {
    this.tasks.unshift(task); //эта строка выводит задачи без перезагрузки страницы
    let tasks: Task[] = [];
    if(!localStorage.getItem('tasks')) {
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  deleteTask(task: Task) {
    for(let i = 0; i < this.tasks.length; i++) {
      if(task == this.tasks[i]) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks)); //обновляет данные в хранилище
      }
    }
  }
}
