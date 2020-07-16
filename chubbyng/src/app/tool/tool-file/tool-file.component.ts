import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-file',
  templateUrl: './tool-file.component.html',
  styleUrls: ['./tool-file.component.scss']
})
export class ToolFileComponent implements OnInit {

  myCount: number = 101;

  constructor() { }

  ngOnInit() {
  }

  countChange(event) {
    this.myCount = event;
  }
}
