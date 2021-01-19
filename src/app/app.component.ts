import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  activeTodo = false;
  appPage = localStorage.getItem('isEntrance');

  
  constructor(
    private taskSvc: TaskService
  ){}



  ngOnInit(): void {
    // подписываемся на изменения тудушек
    // каждый раз когда данные будут обновляется, сработает subscribe коллбек
    // после вызова метода next в task.service
    this.taskSvc.todos.subscribe();
  }

  isHidden(active) {
    this.appPage = active;
  }

}



