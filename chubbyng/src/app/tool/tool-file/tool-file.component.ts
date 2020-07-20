import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-tool-file',
  templateUrl: './tool-file.component.html',
  styleUrls: ['./tool-file.component.scss']
})
export class ToolFileComponent implements OnInit {

  myCount: number = 101;

  subject1 : Subject<number> = new Subject<number>();
  subject2 : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  subject3 : ReplaySubject<number> = new ReplaySubject<number>();
  subject4 : AsyncSubject<number> = new AsyncSubject<number>();

  constructor() { }

  ngOnInit() {
  }

  subjectBtn(){
    this.subject1.next(100);
    this.subject1.subscribe((res:number)=>console.log("Subject A", res));
    this.subject1.subscribe((res:number)=>console.log("Subject B", res));
    this.subject1.next(200);
    this.subject1.next(300);
  }

  behaviorSubjectBtn(){
    this.subject2.next(100);
    this.subject2.subscribe((res:number)=>console.log("Behavior subject A", res));
    this.subject2.next(200);
    this.subject2.subscribe((res:number)=>console.log("Behavior subject B", res));
    this.subject2.next(300);
  }

  replaySubjectBtn(){
    this.subject3.next(100);
    this.subject3.next(200);
    this.subject3.subscribe((res:number)=>console.log("Replay subject A", res));
    this.subject3.next(300);
    this.subject3.subscribe((res:number)=>console.log("Replay subject B", res));
    this.subject3.next(400);
  }

  asyncSubjectBtn(){
    this.subject4.next(100);
    this.subject4.next(200);
    this.subject4.subscribe((res:number)=>console.log("Async subject A", res));
    this.subject4.next(300);
    this.subject4.subscribe((res:number)=>console.log("Async subject B", res));
    this.subject4.next(400);
    this.subject4.subscribe((res:number)=>console.log("Async subject C", res));
    this.subject4.complete();
    this.subject4.subscribe((res:number)=>console.log("Async subject D", res));
    this.subject4.next(500);
  }

  countChange(event) {
    this.myCount = event;
  }
}
