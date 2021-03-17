import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-main',
   templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  opened: boolean | undefined;
  initials = 'O E G R';

  constructor(
    @Inject(DOCUMENT) private document: any,
    private contactService: ContactService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  onOpenedStart(): void{
    this.document.body.classList.add('no-scroll')
  }
  onClosedStart(): void{
    this.document.body.classList.remove('no-scroll')
  }

  onSendFeedback(event: any): void {
    if (event.error) {
      return;
    }
    this.contactService.sendFeedback(event.description, event.screenshot).subscribe(() => {

      this.dialogService.openDialog('Thank you for your feedback.', ['Ok']).subscribe((result: string) => { });
    });
  }

}
