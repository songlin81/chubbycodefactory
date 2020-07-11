import { Injectable } from '@angular/core';
import { VersionserviceService } from './versionservice.service';
import { Language } from '../model/Language';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/config/appsettings';

@Injectable({
  providedIn: 'root'
})
export class LangserviceService {

  constructor(private versionService: VersionserviceService,
              private http: HttpClient){ 
  }

  getVersionContent(){
    return this.versionService.version;
  }

  getAvailableLanguages(){
    return this.http.get(AppSettings.apiurl);
  }

  getDefaultLanguage(){
    return "us";
  }
}
