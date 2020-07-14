import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  title = 'angular-ngrx';
  
  constructor(
    private _store: Store<IAppState>
  ) { 
    
  }

  ngOnInit() {
  }
}
