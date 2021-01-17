import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/services/services/editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {



  constructor(public editorSvc: EditorService) { }

  ngOnInit(): void {
  }
}
