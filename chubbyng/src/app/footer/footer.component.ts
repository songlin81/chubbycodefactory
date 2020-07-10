import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  chubbyId;
  chubbyMinor;

  constructor() { }

  ngOnInit() {
    this.initTranslationTerms();
  }

  initTranslationTerms() {
    this.chubbyId = "2020";
    this.chubbyMinor = "Chubby";
  }
}
