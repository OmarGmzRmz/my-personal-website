import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsRootComponent } from './components/projects-root/projects-root.component';
import { PorjectDetailComponent } from './components/project-detail/porject-detail.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProjectsService } from './services/projects.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProjectDetailResolverService } from './services/project-detail.resolver.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { SwiperModule } from 'ngx-swiper-wrapper';


@NgModule({
  declarations: [ProjectsRootComponent, PorjectDetailComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatIconModule,
    SwiperModule
  ],
  providers: [
    ProjectsService, 
    ProjectDetailResolverService
  ]
})
export class ProjectsModule { }
