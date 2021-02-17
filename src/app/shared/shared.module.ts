import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesPolicyDialogComponent } from './components/cookies-policy-dialog/cookies-policy-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoadingbarComponent } from './components/loadingbar/loadingbar.component';
import { ThemeService } from './services/theme.service';
import { LoaderService } from './services/loader.service';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [CookiesPolicyDialogComponent, LoadingbarComponent, ScrollToTopComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  entryComponents: [
    CookiesPolicyDialogComponent
  ], 
  exports: [
    LoadingbarComponent,
    ScrollToTopComponent
  ],
  providers: [
    ThemeService,
    LoaderService
  ]
})
export class SharedModule { }
