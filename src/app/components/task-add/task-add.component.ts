import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {

  model: any = '';

  constructor(private taskSvc: TaskService) { }

  ngOnInit() {
  }

  add(){
    if(!this.model.length || this.model.length > 200){
      return window.alert('Min 1, Max 200 characters!');
    }
    this.taskSvc.add(this.model); //отобразится в на 34 строке файла task.service.ts
    this.model = '';
  }

}