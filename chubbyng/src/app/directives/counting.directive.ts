import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'button[appCounting]'
})
export class CountingDirective {

  constructor() { }

  clicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn: HTMLElement) {
      console.log('button', btn, 'number of clicks:', this.clicks++);
  }
}
