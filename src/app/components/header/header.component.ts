import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public name = 'Omar Gomez Ramirez';
  public title = 'Ing. Mecatrónico';
  public enableShareButton = true;
  @Input() initials: string | undefined;
  @Output() toggleSidenav: EventEmitter<void> = new EventEmitter();
  constructor() {
    // Code executes on component initialization
    console.log('Executing constructor');
  }

  ngOnInit(): void {
    // Code executes after component has been initialized
    console.log('Executing ngOnInit');
  }

  openNavigationMenu(phrase: string, numero: number ): { frase: string, numero: number } {
    console.log(phrase, numero);
    return { frase: phrase, numero };
  }
}
