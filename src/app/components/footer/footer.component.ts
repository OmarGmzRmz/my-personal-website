import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  nameFooter = 'Omar Gomez Ramirez';
  titleFooter = 'Ing. Mecatrónico';
  phoneNumberFooter = '452 525 52 86';
  emailAddressFooter = 'gomar8138@gmail.com';
  physicalAddressFooter = 'Av. Moreos #1, San Felipe de los Herreros, Charapan, Michoacán.';
  public text = 'Powered by Omar Gómez Ramírez';
  constructor() { }

  ngOnInit(): void {
  }
  onShowInfo(info: string): void {
    alert(info);
  }

}
