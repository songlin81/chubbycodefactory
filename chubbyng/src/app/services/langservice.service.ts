import { Injectable } from '@angular/core';
import { VersionserviceService } from './versionservice.service';
import { Language } from '../model/Language';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LangserviceService {

  private apiurl = "http://81.70.9.51:5000/getLangList";
  
  constructor(private versionService: VersionserviceService,
              private http: HttpClient) { 
  }

  getVersionContent(){
    return this.versionService.version;
  }

  getAvailableLanguages(){
    return this.http.get(this.apiurl);
  }

  getDefaultLanguage(){
    return "us";
  }
}
