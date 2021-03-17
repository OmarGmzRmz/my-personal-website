import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectsService } from './projects.service';
import { Project } from './view-models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailResolverService implements Resolve<any>{

  constructor(private projectsService: ProjectsService) { }

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
    const projectId = route.params.id;
    return this.projectsService.getProjectById(projectId).pipe(
      map((project: Project) => {
        if(project) {
          return {
            project
          }
        } else {
          return {
            project: null
          }
        }
      })
    );
  }
}
