import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { pairwise, skip } from 'rxjs/operators';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  theme = 'light-theme';
  selectedThemesubscription: Subscription | undefined;

  constructor(
    private themeService: ThemeService,
    private overlayContainer: OverlayContainer,
    private translateService: TranslateService,
    private renderer: Renderer2
    
  ) {
    const defaultLang = 'en';
    translateService.addLangs(['en', 'es']);
    translateService.setDefaultLang(defaultLang);
    const browserLang = translateService.getBrowserLang();
    const langToUse = browserLang.match(/en|es/) ? browserLang : defaultLang;
    translateService.use(langToUse);
  }

  ngOnInit() {
    // theme: light-theme, dark-theme, etc.
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      this.themeService.setTheme(storedTheme);
    } else {
      // TODO: Default theme should be a configuration variable.
      this.themeService.setTheme('light-theme');
    }

    this.themeService.selectedTheme$.pipe().subscribe((theme: string) => {
      this.theme = theme;
      this.overlayContainer.getContainerElement().classList.add(<string>theme);
      this.renderer.addClass(document.body, theme);
    });
    
    this.selectedThemesubscription = this.themeService.selectedTheme$.pipe(
      pairwise()
    ).subscribe((theme) => {
      //console.log('pair', theme);
      const previous = theme[0];
      const current = theme[1];
      this.theme = current;
      this.overlayContainer.getContainerElement().classList.remove(<string>previous);
      this.overlayContainer.getContainerElement().classList.add(<string>current);
      this.renderer.removeClass(document.body, previous);
      this.renderer.addClass(document.body, current);
    });
  }

  ngOnDestroy() {
    this.selectedThemesubscription?.unsubscribe();
  }

}