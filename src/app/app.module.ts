import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ModelService } from './services/model.service';
import { TaskService } from './services/task.service';
import { EditorService } from './services/services/editor.service';
import { CheckedService } from './services/services/checked.service';
import { PriorityService } from './services/services/priority.service';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskContainerComponent } from './components/task-container/task-container.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { SearchComponent } from './components/sort-triggers/sort-triggers.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { EditorComponent } from './components/editor/editor.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TaskAddComponent,
    TaskContainerComponent,
    TaskItemComponent,
    SearchComponent,
    ConfirmComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    ModelService, 
    TaskService, 
    EditorService, 
    CheckedService,
    PriorityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
