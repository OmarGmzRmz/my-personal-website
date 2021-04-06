import { Clipboard } from '@angular/cdk/clipboard';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrls: ['./presentation-card.component.scss']
})
export class PresentationCardComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() title: string | undefined;
  @Input() phoneNumber: string | undefined;
  @Input() emailAddress: string | undefined;
  @Input() physicalAddress: string | undefined;
  @Output() showInfo = new EventEmitter<string>();

  constructor(
    //#region Copy to clipboard
    private clipboard: Clipboard
    //#endregion
  ) { }

  ngOnInit(): void {
  }

  emitShowInfoEvent(): void {
    const info = 'This Information is personal information and by no means shall be used for non-legal propuses';
    this.showInfo.emit(info);
  }

  copyLinkToClipboard() {
    // TODO: Copy actual url. Should fetch this value from environment.ts
    this.clipboard.copy('192.168.3.12:4204');
  }

  shareOnFacebook() {
    const postUrl = encodeURI(document.location.href);
    window.open(`https://www.facebook.com/sharer.php?u=${postUrl}`);
  }

  shareOnTwitter() {
    const postUrl = encodeURI(document.location.href);
    const text = 'Checkout this awesome website';
    window.open(`https://www.twitter.com/share?url=${postUrl}&text=${text}`);
  }

}
