import { Injectable } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Injectable({
  providedIn: 'root'
})

// Сервис по редактированию задачи

export class EditorService {

  activeEditor: boolean = false; //регулирует появление editor
  answearEditor: boolean = false //регулирует ответ пользователя
  indexOfEditor: number;


  // Данные из textarea
  model: any = ''; //входные даннные
  newTextContent: any = ''; //отвалидированные данные

  constructor(public task: TaskService) { }

  onEditor(index: number) {
    this.activeEditor = true;
    this.indexOfEditor = index; //получение индекса задачи
    // console.log(this.indexOfEditor);
    this.model = this.task.items[index].text //Вывод в textarea текущего текста задачи
  }

  onCancel() {
    this.activeEditor = false;
  }

   // Обработка ответа Save. Редактирование задачи
  onSave(index: any) {
    this.activeEditor = false;
    if(this.model.trim()) {
      // Обрезание слишком длинных слов в предложении
      let charArr = this.model.split(' ');
      const arr = [];
      charArr.forEach((item) => {
      item = `${item.substring(0, 15)}`;
      arr.push(item);
      });
      this.newTextContent = arr.join(' ');
    }
    this.task.items[index].text = this.newTextContent; //получение ключа text объекта [index]
    this.task.save(); //обновление задачи в local storage
  }
}
