import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  activeTodo = false;
  appPage = localStorage.getItem('isEntrance');
  

  App = { tasks: [] };

  ngOnInit(): void {
  }

  isHidden(active) {
    this.appPage = active;
  }

  updateTasks(newTask) {
    //Сдесь идет генерация задач
    const task = {
      date: Date.now(),
      prior: 1,
      text: newTask,
      done: false
    }
    this.App.tasks.unshift(task)
    
    localStorage.setItem('allTodo', JSON.stringify(this.App.tasks));
  }
}

// console.log(AppComponent);
// const c = new AppComponent()
// console.log(typeof AppComponent);
// console.log(typeof c);


