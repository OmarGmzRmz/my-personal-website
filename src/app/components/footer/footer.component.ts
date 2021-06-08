import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { switchAll } from 'rxjs/operators';
import { CookiesPolicyDialogComponent } from 'src/app/shared/components/cookies-policy-dialog/cookies-policy-dialog.component';
import { PrivacyDialogComponent } from 'src/app/shared/components/privacy-dialog/privacy-dialog.component';
import { TermsDialogComponent } from 'src/app/shared/components/terms-dialog/terms-dialog.component';
import { selectDataState } from 'src/app/store/data/data.selectors';
import { DataState } from 'src/app/store/data/data.state';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  nameFooter: string = '';
  titleFooter: string = '';
  phoneNumberFooter: string = '';
  emailAddressFooter:string = '';
  physicalAddressFooter: string = '';
  public text: string = '';
  showInfo: any;
  constructor( 
    public dialog: MatDialog,
    private dataStore: Store<DataState>
    ) { }

  ngOnInit(): void {
    //#region Data State
    this.dataStore.select(selectDataState).subscribe((dataState: DataState) => {
      this.nameFooter = dataState.name;
    });
    this.dataStore.select(selectDataState).subscribe((dataState: DataState) => {
      this.phoneNumberFooter = dataState.phoneNumber;
    });
    this.dataStore.select(selectDataState).subscribe((dataState: DataState) => {
      this.emailAddressFooter = dataState.email;
    });
    this.dataStore.select(selectDataState).subscribe((dataState: DataState) => {
      this.physicalAddressFooter = dataState.address;
    });
    this.dataStore.select(selectDataState).subscribe((dataState: DataState) => {
      this.titleFooter = dataState.job;
    });
    this.dataStore.select(selectDataState).subscribe((dataState: DataState) => {
      this.text = dataState.name;
    });
    //#endregion
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
