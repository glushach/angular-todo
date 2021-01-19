import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/services/alert.service';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {

  model: any = '';

  constructor(private taskSvc: TaskService, private alertSvc: AlertService) { }

  ngOnInit() {
  }

  add(){
    if(!this.model.length || this.model.length > 200){
      this.alertSvc.alertShow = true;
      // return window.alert('Min 1, Max 200 characters!');
    }
    if(this.model.trim()) {
      // Обрезание слишком длинных слов в предложении
      let charArr = this.model.split(' ');
      const arr = [];
      charArr.forEach((item) => {
      item = `${item.substring(0, 15)}`;
      arr.push(item);
      });
      this.model = arr.join(' ');

      this.taskSvc.add(this.model); //отобразится в на 34 строке файла task.service.ts
      this.model = '';
    }
  }

} 