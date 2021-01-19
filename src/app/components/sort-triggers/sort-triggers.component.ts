import { Component, OnInit } from '@angular/core';
import { SortCheckedService } from 'src/app/services/services/sort-checked.service';
import { SortDateService } from 'src/app/services/services/sort-date.service';
import { SortPriorService } from 'src/app/services/services/sort-prior.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-sort-triggers',
  templateUrl: './sort-triggers.component.html',
  styleUrls: ['./sort-triggers.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    public taskSvc: TaskService, 
    public SortDateSevc: SortDateService,
    public SortPriorSevc: SortPriorService,
    public SortCheckedSvc: SortCheckedService
    ) { }

  ngOnInit(): void {
  }

}
