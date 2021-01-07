import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvRootComponent } from './components/cv-root/cv-root.component';
import { ResumedCvComponent } from './components/resumed-cv/resumed-cv.component';
import { CvComponent } from './components/cv/cv.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [CvRootComponent, ResumedCvComponent, CvComponent],
  imports: [
    CommonModule,
    CvRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class CvModule { }
