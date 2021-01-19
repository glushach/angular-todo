import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {

  items: Observable<any>;

  // confir;
  
  constructor(public taskSvc: TaskService) { }

  ngOnInit() {
    this.items = this.taskSvc.todos;
  }

}
