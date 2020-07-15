import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { IConfig } from '../../model/config.interface';
import { UserService } from './../../services/user.service';
import { EConfigActions, GetConfig, GetConfigSuccess } from '../actions/config.actions';

@Injectable()
export class ConfigEffects {
  @Effect()
  getConfig$ = this._actions$.pipe(
    ofType<GetConfig>(EConfigActions.GetConfig),
    switchMap(() => this._userService.getPermission()),
    switchMap((config: IConfig) => {
      return of(new GetConfigSuccess(config));
    })
  );

  constructor(
    private _userService: UserService,
    private _actions$: Actions) {}
}
