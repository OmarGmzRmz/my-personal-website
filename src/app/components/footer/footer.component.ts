import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { switchAll } from 'rxjs/operators';
import { CookiesPolicyDialogComponent } from 'src/app/shared/components/cookies-policy-dialog/cookies-policy-dialog.component';
import { PrivacyDialogComponent } from 'src/app/shared/components/privacy-dialog/privacy-dialog.component';
import { TermsDialogComponent } from 'src/app/shared/components/terms-dialog/terms-dialog.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  nameFooter = 'Omar Eliseo Gómez Ramirez';
  titleFooter = 'Ingeniero Mecatrónico';
  phoneNumberFooter = '+52 452 525 52 86';
  emailAddressFooter = 'gomar8138@gmail.com';
  physicalAddressFooter = 'San Felipe de los Herreros, Charapan, Michoacán, 60240';
  public text = 'Omar Eliseo Gómez Ramírez';
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
    switch (dialog) {
      case 'privacy': 
      this.dialog.open(PrivacyDialogComponent, {
        height: '80vh',
        autoFocus: false
      });
      break;
      case 'cookies':
        this.dialog.open(CookiesPolicyDialogComponent, {
          height: '80vh',
          autoFocus: false
        });
        break;
      case 'terms':
        this.dialog.open(TermsDialogComponent, {
          height: '80vh',
          autoFocus: false
        });
        break;
    }
  }
}
