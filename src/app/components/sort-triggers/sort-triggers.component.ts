import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-sort-triggers',
  templateUrl: './sort-triggers.component.html',
  styleUrls: ['./sort-triggers.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public taskSvc: TaskService) { }

  ngOnInit(): void {
  }

}
