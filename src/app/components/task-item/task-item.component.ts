import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckedService } from 'src/app/services/services/checked.service';
import { EditorService } from 'src/app/services/services/editor.service';
import { PriorityService } from 'src/app/services/services/priority.service';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent{

  @Input('index') index: number; //он используется в task-container и передается в task-item на кнопку удалить
  @Input('data') data: any; //он используется в task-container и передается в task-item для вывода данных в браузер
  @Output() onClass:EventEmitter<any> = new EventEmitter<any>()

  

  constructor(
    public prioritySvs: PriorityService,
    public taskSvc:TaskService, 
    public editorSvc: EditorService, 
    public checkedSvc: CheckedService
    ) { }

  ngOnInit(): void {
  }
}
