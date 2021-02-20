import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExeHighlight]'
})
export class ExeHighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('document:click', ['$event'])
    onClick(btn: Event) {
        if (this.el.nativeElement.contains(event.target)) {
          this.el.nativeElement.style.backgroundColor = "red";
        } else {
          this.el.nativeElement.style.backgroundColor = "yellow";
        }
    }
}
