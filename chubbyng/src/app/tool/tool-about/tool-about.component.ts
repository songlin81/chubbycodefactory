import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-about',
  templateUrl: './tool-about.component.html',
  styleUrls: ['./tool-about.component.scss']
})
export class ToolAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Card View';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
}
