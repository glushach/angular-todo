import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  deleteTask(task: Task) {
    if(confirm('Delete task')) {
      this.taskService.deleteTask(task);
    }
  }
}
