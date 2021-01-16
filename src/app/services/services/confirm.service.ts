import { Injectable } from '@angular/core';
import { TaskService } from '../task.service';


@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  activeConfirm: boolean = false; //регулирует появление confirm
  indexOfComfirm: number;

  constructor(private task: TaskService) { }
  

}
