import { Component, OnInit } from '@angular/core';
import { Language } from '../model/Language';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  Languages: Language[];
  selectedLanguage;
  chubbyTM;

  constructor(private translate: TranslateService) { 
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
    this.selectedLanguage = "us";
    this.Languages = [
      new Language("us", "US English"),
      new Language("fr", "French")
    ];
  }

  langChange(event){
    this.selectedLanguage = event.value;
    this.selectedLanguage==="us" ? this.translate.use("en") : this.translate.use(this.selectedLanguage);
  }

  getSelectedLanguageDescription(){
    return this.Languages.filter(x=>x.langCode==this.selectedLanguage)[0].LangDescription;
  }
}
