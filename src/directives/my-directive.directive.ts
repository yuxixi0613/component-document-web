import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective {
  constructor(el: ElementRef) {
    console.log(el, 'el');
    el.nativeElement.onclick = () => {
      console.log('click');
    };
  }
  //  点击变成红色的指令
}
