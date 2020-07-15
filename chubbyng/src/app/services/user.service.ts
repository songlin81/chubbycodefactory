import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUserHttp } from '../model/http-models/user-http.interface';
import { AppSettings } from 'src/config/appsettings';
import { IConfig } from '../model/config.interface';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<IUserHttp> {
    return this._http.get<IUserHttp>(AppSettings.userurl);
  }

  getPermission(): Observable<IConfig> {
    return this._http.get<IConfig>(AppSettings.permissionrurl);
  }
}