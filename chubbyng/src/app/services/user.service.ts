import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IUserHttp } from '../model/http-models/user-http.interface';
import { AppSettings } from 'src/config/appsettings';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<IUserHttp> {
    return this._http.get<IUserHttp>(AppSettings.userurl);
  }
}