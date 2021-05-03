import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvRootComponent } from './components/cv-root/cv-root.component';
import { CvComponent } from './components/cv/cv.component';
import { ResumedCvComponent } from './components/resumed-cv/resumed-cv.component';

const routes: Routes = [
  { 
  path: '', component:
  CvRootComponent/* ,
  children: [
     { path: '', redirectTo: 'description', pathMatch: 'full' },
     { path: 'cv', component: CvComponent },
     { path: 'resumed-cv', component: ResumedCvComponent }
    ]  */
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
