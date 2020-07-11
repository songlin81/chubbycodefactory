import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppSettings } from '../config/appsettings';
import { MatSelectModule, MatFormField } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { Language } from './model/Language';
import { TranslateService } from '@ngx-translate/core';
import { LangserviceService } from './services/langservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  openState = true;
  Languages: Language[];
  selectedLanguage;
  chubbyTM;

  constructor(private titleService: Title,
    private translate: TranslateService,
    private langService: LangserviceService){
    titleService.setTitle('Chubby');

    translate.setDefaultLang('en');
    this.translate.get(["chubbyTitle", "CN"]).subscribe(res => {
      //console.log(JSON.stringify(res));
      //console.log(res.chubbyTitle);
    });
  }

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  get screenWidthDefault(){
    return AppSettings.defaultScreenWidth;
  }

  ngOnInit() {
    if (window.innerWidth < this.screenWidthDefault) {
      this.openState = false;
    } else {
      this.openState = true;
    }

    this.initLanguage();
    this.initTranslationTerms();
  }

  initTranslationTerms() {
    this.chubbyTM = ".";
  }

  initLanguage(){
    console.log(this.langService.getVersionContent());
    this.selectedLanguage = this.langService.getDefaultLanguage();
    this.Languages=[];
    this.langService.getAvailableLanguages().subscribe((data)=>{
       for( var key in data ){
        this.Languages.push(new Language(key, data[key]));
       }
    });
  }

  langChange(event){
    this.selectedLanguage = event.value;
    this.selectedLanguage==="us" ? this.translate.use("en") : this.translate.use(this.selectedLanguage);
  }

  getSelectedLanguageDescription(){
    if(this.Languages.length>0){
      return this.Languages.filter(x=>x.langCode==this.selectedLanguage)[0].LangDescription;
    }
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