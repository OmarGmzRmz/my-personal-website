import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactService } from 'src/app/services/contact.service';
import { DialogService } from 'src/app/services/dialog.service';
import { selectDataState } from 'src/app/store/data/data.selectors';
import { DataState } from 'src/app/store/data/data.state';

@Component({
  selector: 'app-main',
   templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  opened: boolean | undefined;
  initials: string = '';

  constructor(
    @Inject(DOCUMENT) private document: any,
    private contactService: ContactService,
    private dialogService: DialogService,
    private dataStore: Store<DataState>
  ) { }

  ngOnInit(): void {
    this.dataStore.select(selectDataState).subscribe((dataState: DataState) => {
      this.initials = dataState.initials;
    });
  }

  onOpenedStart(): void{
    this.document.body.classList.add('no-scroll')
  }
  onClosedStart(): void{
    this.document.body.classList.remove('no-scroll')
  }

  onSendFeedback(event: any): void {
    // Reactive smooth scrolling for html element.
    // This has to bee done because the Ng feedback dialog requires no smooth scroll bahavior in order to take screen shot.
    this.document.getElementById('html-element').style.scrollBehavior = 'smooth';
    if (event.error) {
      return;
    }
    if (event.error) {
      return;
    }
    this.contactService.sendFeedback(event.description, event.screenshot).subscribe(() => {
    this.dialogService.openDialog('Thank you for your feedback.', ['Ok']).subscribe((result: string) => { });
    });
  }
  /**
   * This function is being called so the Ng feedback can place the right screen shot
   *
   * @memberof MainComponent
   */
   deactivateSmothScrolling() {
    this.document.getElementById('html-element').style.scrollBehavior = 'unset';
  }

}
