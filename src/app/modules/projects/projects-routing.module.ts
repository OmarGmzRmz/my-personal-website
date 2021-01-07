import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsRootComponent } from './components/projects-root/projects-root.component';
import { PorjectDetailComponent } from './components/project-detail/porject-detail.component';
import { ProjectDetailResolverService } from './services/project-detail.resolver.service';

const routes: Routes = [
  { path: '', component: ProjectsRootComponent },
  { path: ':id', component: PorjectDetailComponent, resolve: {projectDetailInfo: ProjectDetailResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
