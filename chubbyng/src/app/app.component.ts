import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppSettings } from '../config/appsettings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  openState = true;

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