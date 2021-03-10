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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from './shared/shared.module';
import { NgParticlesModule } from 'ng-particles';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoadingbarComponent } from './components/loadingbar/loadingbar.component';
import { LoaderService } from './services/loader.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ContactService } from './services/contact.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogService } from './services/dialog.service';
import { ScrollIndicatorComponent } from './components/scroll-indicator/scroll-indicator.component';

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
    SidebarComponent,
    LoadingbarComponent,
    DialogComponent,
    ScrollIndicatorComponent
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
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    SwiperModule,
    FontAwesomeModule,
    MatDialogModule,
    SharedModule,
    NgParticlesModule, 
    MatButtonToggleModule
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  },
  LoaderService,
  ContactService,
  DialogService
],
entryComponents: [
  DialogComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
