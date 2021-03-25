import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-about-root',
  templateUrl: './about-root.component.html',
  styleUrls: ['./about-root.component.scss']
})
export class AboutRootComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
    private overlayContainer: OverlayContainer,
    private translateService: TranslateService
    
  ) {
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  ngOnInit(): void {
  }

}
