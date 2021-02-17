import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookiesPolicyDialogComponent } from 'src/app/shared/components/cookies-policy-dialog/cookies-policy-dialog.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  nameFooter = 'Omar Eliseo Gómez Ramirez';
  titleFooter = 'Ing. Mecatrónico';
  phoneNumberFooter = '452 525 52 86';
  emailAddressFooter = 'gomar8138@gmail.com';
  physicalAddressFooter = 'Av. Morelos 1, San Felipe de los Herreros, Charapan, Michoacán, 60241';
  public text = 'Omar Gómez Ramírez';
  showInfo: any;
  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onShowInfo(info: string): void {
    alert(info);
  }
  navigateLink(link: string) {
    window.open(link, '_blank');
  }
  openDialog(dialog: string) {
    this.dialog.open(CookiesPolicyDialogComponent, {
      height: '80vh',
      autoFocus: false
    });
  }
}
