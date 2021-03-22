import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }


  ngOnInit(): void {
    //Better way toa ccess the DOM(Document Object Model)
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

}
