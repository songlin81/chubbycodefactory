import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appExeButtonPress]'
})
export class ExeButtonPressDirective {

  constructor() { }

  @HostBinding('attr.role') role = 'button2';
    @HostBinding('class.pressed') isPressed: boolean;

    @HostListener('mousedown') hasPressed() {
        this.isPressed = true;
    }
    @HostListener('mouseup') hasReleased() {
        this.isPressed = false;
    }
}
