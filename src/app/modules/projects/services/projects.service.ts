import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './view-models/project.interface';
import { ProjectsYear } from './view-models/projects-year.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  years = [
    {
      year: 2017,
      projects: [
        { id: 1, name: 'Project 1', code: 'PJT1', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' },
        { id: 2, name: 'Project 2', code: 'PJT2', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' },
        { id: 3, name: 'Project 3', code: 'PJT3', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' },
        { id: 4, name: 'Project 4', code: 'PJT4', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' }
      ]
    },
    {
      year: 2018,
      projects: [
        { id: 5, name: 'Project 5', code: 'PJT1', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' },
        { id: 6, name: 'Project 6', code: 'PJT2', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' },
        { id: 7, name: 'Project 7', code: 'PJT3', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' }
      ]
    },
    {
      year: 2019,
      projects: [
        { id: 8, name: 'Project 8', code: 'PJT1', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' },
        { id: 9, name: 'Project 9', code: 'PJT2', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' },
        { id: 10, name: 'Project 10', code: 'PJT3', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' }
      ]
    },
    {
      year: 2020,
      projects: [
        { id: 11, name: 'Project 11', code: 'PJT1', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' },
        { id: 12, name: 'Project 12', code: 'PJT2', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' },
        { id: 13, name: 'Project 13', code: 'PJT3', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' },
        { id: 14, name: 'Project 14', code: 'PJT4', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' },
        { id: 15, name: 'Project 15', code: 'PJT5', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' }
      ]
    },
    {
      year: 2021,
      projects: [
        { id: 16, name: 'Project 16', code: 'PJT1', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg' }
      ]
    }
  ];

  constructor() { }

  getProjectsYears(): Observable<ProjectsYear[]>   {
    return new Observable(obs => {
      setTimeout(() => {
        obs.next(this.years);
        obs.complete();
      }, 5000);
    });
  }

  getProjectById(id: number): Observable<Project> {
    let found: Project | undefined = undefined;
    let i = 0;
    while (found == null && i < this.years.length ) {
      let j = 0;
      const year = this.years[i];
      while (found == null && j < year.projects.length ) {
        const project = year.projects[j];
        if (id == project.id ) {
          found = project;
        }
        j++;
      }
      i++;      
    }
    return new Observable(obs => {
      setTimeout(() => {
        obs.next(found);
        obs.complete();
      }, 3000);
    });
  }
}

