import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesPolicyDialogComponent } from './components/cookies-policy-dialog/cookies-policy-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from './services/theme.service';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PrivacyDialogComponent } from './components/privacy-dialog/privacy-dialog.component';
import { TermsDialogComponent } from './components/terms-dialog/terms-dialog.component';
import { CoolBorderComponent } from './components/cool-border/cool-border.component';



@NgModule({
  declarations: [CookiesPolicyDialogComponent , ScrollToTopComponent, PrivacyDialogComponent, TermsDialogComponent, CoolBorderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  entryComponents: [
    CookiesPolicyDialogComponent,
    PrivacyDialogComponent
  ], 
  exports: [
    ScrollToTopComponent,
    TermsDialogComponent,
    //practice
    CoolBorderComponent
  ],
  providers: [
    ThemeService
  ]
})
export class SharedModule { }
