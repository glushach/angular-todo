import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ModelService } from './services/model.service';
import { TaskService } from './services/task.service';
import { EditorService } from './services/services/editor.service';
import { CheckedService } from './services/services/checked.service';
import { PriorityService } from './services/services/priority.service';
import { AlertService } from './services/services/alert.service';
import { SortDateService } from './services/services/sort-date.service';
import { SortPriorService } from './services/services/sort-prior.service';
import { SortCheckedService } from './services/services/sort-checked.service';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskContainerComponent } from './components/task-container/task-container.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { SearchComponent } from './components/sort-triggers/sort-triggers.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { EditorComponent } from './components/editor/editor.component';
import { AlertComponent } from './components/alert/alert.component';
import { FilterPipe } from './pipes/filter.pipe';




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
    AlertComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    ModelService, 
    TaskService,
    AlertService,
    EditorService, 
    CheckedService,
    PriorityService,
    SortDateService,
    SortPriorService,
    SortCheckedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
