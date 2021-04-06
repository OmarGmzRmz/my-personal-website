import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{
   @HostListener('mouseenter') mouseenter(eventData: Event) {
     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
   }

   @HostListener('mouseleave') mouseleave(eventData: Event) {
     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
     this.borderColor = 'orange';
   }

   @HostBinding('style.borderColor') borderColor: string = 'black';

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }


  ngOnInit(): void {
    //Better way to access the DOM(Document Object Model)
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'border', '1px dashed pink');
  }

}
