import { Component, OnInit } from '@angular/core';
import { Language } from '../model/Language';
import { TranslateService } from '@ngx-translate/core';
import { LangserviceService } from '../services/langservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [LangserviceService]
})
export class HeaderComponent implements OnInit {

  Languages: Language[];
  selectedLanguage;
  chubbyTM;

  constructor(private translate: TranslateService,
              private langService: LangserviceService) { 
    translate.setDefaultLang('en');
    this.translate.get(["chubbyTitle", "CN"]).subscribe(res => {
      console.log(JSON.stringify(res));
      console.log(res.chubbyTitle);
    });
  }

  ngOnInit() {
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
}
