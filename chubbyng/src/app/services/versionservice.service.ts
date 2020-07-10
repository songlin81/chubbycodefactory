import { Injectable } from '@angular/core';
import { AppSettings } from '../../config/appsettings';

@Injectable({
  providedIn: 'root'
})
export class VersionserviceService {

  constructor() { }

  get version(){
    return AppSettings.version;
  }
}
