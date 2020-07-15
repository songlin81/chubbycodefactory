import { GetUsers } from './../../../store/actions/user.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../../store/state/app.state';
import { selectUserList, selectLoading } from '../../../store/selectors/user.selector';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$ = this._store.pipe(select(selectUserList));
  status=false;
  constructor(private _store: Store<IAppState>, 
              private _router: Router,
              private SpinnerService: NgxSpinnerService) {
  }

  ngOnInit() {
    this.GetUserListing();
  }

  GetUserListing() {
    this.SpinnerService.show();
    this._store.dispatch(new GetUsers());
    this._store.pipe(select(selectLoading)).subscribe((data) => {
      if(data===true){
        this.SpinnerService.hide();
      }
    });
  }

  onRefresh(){
    this.GetUserListing();
  }

  navigateToUser(id: number) {
    this._router.navigate(['person/user', id]);
  }
}
