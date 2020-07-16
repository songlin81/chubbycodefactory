import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tool-counter',
  templateUrl: './tool-counter.component.html',
  styleUrls: ['./tool-counter.component.scss']
})
export class ToolCounterComponent implements OnInit {

  @Input()
  count: number = 0;

  @Output()
  change : EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

}
