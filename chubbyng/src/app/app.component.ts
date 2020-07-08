import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppSettings } from '../config/appsettings';
import { MatSelectModule, MatFormField } from '@angular/material';
import { Language } from './model/Language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  openState = true;
  Languages: Language[];
  selectedLanguage;

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  get screenWidthDefault(){
      return AppSettings.defaultScreenWidth;
  }

  ngOnInit() {
    this.initLanguage();

    if (window.innerWidth < this.screenWidthDefault) {
      this.openState = false;
    } else {
      this.openState = true;
    }
  }

  initLanguage(){ //todo: service to get list of languages
    this.selectedLanguage = "us";
    this.Languages = [
      new Language("us", "US English"),
      new Language("fr", "French")
    ];
  }

  langChange(event){
    this.selectedLanguage = event.value;
    console.log(event.value);
  }

  getSelectedLanguageDescription(){
    return this.Languages.filter(x=>x.langCode==this.selectedLanguage)[0].LangDescription;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < this.screenWidthDefault) {
      this.openState = false;
    } else {
      this.openState = true;
    }
  }

  setScreenMode() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < this.screenWidthDefault) {
      return true;
    } else {
      return false;
    }
  }
}