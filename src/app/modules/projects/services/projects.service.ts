import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
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
        { id: 1, name: 'Project 1', code: 'PJT1', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` },
        { id: 2, name: 'Project 2', code: 'PJT2', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` },
        { id: 3, name: 'Project 3', code: 'PJT3', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` },
        { id: 4, name: 'Project 4', code: 'PJT4', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` }
      ]
    },
    {
      year: 2018,
      projects: [
        { id: 5, name: 'Project 5', code: 'PJT1', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` },
        { id: 6, name: 'Project 6', code: 'PJT2', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` },
        { id: 7, name: 'Project 7', code: 'PJT3', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` }
      ]
    },
    {
      year: 2019,
      projects: [
        { id: 8, name: 'Project 8', code: 'PJT1', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` },
        { id: 9, name: 'Project 9', code: 'PJT2', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` },
        { id: 10, name: 'Project 10', code: 'PJT3', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` }
      ]
    },
    {
      year: 2020,
      projects: [
        { id: 11, name: 'Project 11', code: 'PJT1', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` },
        { id: 12, name: 'Project 12', code: 'PJT2', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` },
        { id: 13, name: 'Project 13', code: 'PJT3', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` },
        { id: 14, name: 'Project 14', code: 'PJT4', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` },
        { id: 15, name: 'Project 15', code: 'PJT5', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` }
      ]
    },
    {
      year: 2021,
      projects: [
        { id: 16, name: 'Project 16', code: 'PJT1', image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?cs=srgb&dl=pexels-yurii-hlei-1365795.jpg&fm=jpg', description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>` }
      ]
    }
  ];

  constructor(
    private loaderService: LoaderService
  ) { }

  getProjectsYears(): Observable<ProjectsYear[]>   {
    this.loaderService.show();
    return new Observable(obs => {
      setTimeout(() => {
        obs.next(this.years);
        obs.complete();
        this.loaderService.hide();
      }, 5000);
    });
  }

  getProjectById(id: number): Observable<Project> {
    this.loaderService.show();
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
        this.loaderService.hide();
      }, 3000);
    });
  }
}

