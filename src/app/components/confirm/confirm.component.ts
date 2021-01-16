import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})


export class ConfirmComponent implements OnInit {

  constructor(public taskSvc: TaskService) { }

  ngOnInit(): void {
  }
}
