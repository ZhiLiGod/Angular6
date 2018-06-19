import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedblack]'
})
export class RedblackDirective {

  constructor(private el: ElementRef) {
    
  }

  ngOnInit() {
    this.el.nativeElement.style.color = "white";
    this.el.nativeElement.style.backgroundColor = "black";
  }

}
