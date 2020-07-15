import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { GetConfig } from '../store/actions/config.actions';
import { selectConfig } from '../store/selectors/config.selector';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  title = 'Home';
  config$ = this._store.pipe(select(selectConfig));
  
  constructor(
    private _store: Store<IAppState>
  ) { 
    
  }

  ngOnInit() {
    this._store.dispatch(new GetConfig());
  }
}
