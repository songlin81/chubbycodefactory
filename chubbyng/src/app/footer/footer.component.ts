import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  chubbyId;
  chubbyMinor;

  dangerousUrl='&copy;';
  myHTML;

  constructor(sanitizer: DomSanitizer) {
    this.myHTML= sanitizer.bypassSecurityTrustHtml(this.dangerousUrl);
  }

  ngOnInit() {
    this.initTranslationTerms();
  }

  initTranslationTerms() {
    this.chubbyId = "2020";
    this.chubbyMinor = "Chubby";
  }
}
