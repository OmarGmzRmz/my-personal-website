import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatCardModule} from '@angular/material/card';
import { LandingComponent } from './components/landing/landing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PresentationCardComponent } from './components/presentation-card/presentation-card.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG} from 'ngx-swiper-wrapper';
import { ThemeService } from './shared/services/theme.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from './shared/shared.module';
import { NgParticlesModule } from 'ng-particles';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LandingComponent,
    NotFoundComponent,
    PresentationCardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    SwiperModule,
    FontAwesomeModule,
    MatDialogModule,
    SharedModule,
    NgParticlesModule
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  },
  ThemeService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
