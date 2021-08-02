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
      year: 2018,
      projects: [
        { 
          id: 1,
          name: 'Mini Toro Mecánico',
          code: 'PJT1',
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTalMmfKu5hAjxMdhh0YfX-lYYAhD3g7rDQ&usqp=CAU',
          description: `<p>More information coming soon.</p>`,
          images: [
            'assets/images/projects/project-toro1.jpg',
            'assets/images/projects/project-toro2.jpg'
          ]
        }
      ]
    },
    {
      year: 2019,
      projects: [
        { 
          id: 2,
          name: 'Banda Transportadora',
          code: 'PJT2',
          thumbnail: 'https://sc04.alicdn.com/kf/H5a476bec996d464991856d66d8b24c4aD.png',
          description: `<p>More information coming soon.</p>`,
          images: [
            'assets/images/projects/project-banda1.jpg',
            'assets/images/projects/project-banda2.jpg'
          ]
        }
      ]
    },
    {
      year: 2021,
      projects: [
        { 
          id: 3,
          name: 'Control Car',
          code: 'PJT3',
          thumbnail: 'https://www.webelectro.com.mx/wp-content/uploads/2017/03/kit-chasis-de-carro-con-4-ruedas-arduino-robotica-pic-D_NQ_NP_269815-MLM25327103724_012017-O.jpg',
          description: `<p>More information coming soon.</p>`,
          images: [
            'assets/images/projects/project-car1.jpg',
            'assets/images/projects/project-car2.jpg',
            'assets/images/projects/project-car3.jpg',
            'assets/images/projects/project-car4.jpg',
            'assets/images/projects/project-car5.jpg'
          ]
        },
        { 
          id: 4,
          name: 'Contenedor de botellas',
          code: 'PJT4',
          thumbnail: 'assets/images/projects/project-contenedor1.jpg',
          description: `<p>More information coming soon.</p>`,
          images: [
            'assets/images/projects/project-contenedor1.jpg',
            'assets/images/projects/project-contenedor2.jpg',
            'assets/images/projects/project-contenedor3.jpg',
            'assets/images/projects/project-contenedor4.jpg',
            'assets/images/projects/project-contenedor5.jpg'
          ]
        },
        { 
          id: 5,
          name: 'Circuit RLC Calculator',
          code: 'PJT5',
          thumbnail: 'https://cdn.kastatic.org/ka-perseus-images/7bf2a85a2432376373d66e4a86fe015fdb5f5570.svg',
          description: `<p>More information coming soon.</p>`,
            images: [
            'assets/images/projects/project-calculator1.jpg',
            'assets/images/projects/project-calculator2.jpg'
          ]
        },
        { 
          id: 6,
          name: 'Personal Website',
          code: 'OEGR',
          thumbnail: 'https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
          description: `<p>More information coming soon.</p>`,
            images: [
          ]
        }
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

