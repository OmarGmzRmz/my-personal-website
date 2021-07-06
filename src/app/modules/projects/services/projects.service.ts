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
          description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
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
          description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
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
          description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
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
          thumbnail: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.6435-0/p526x296/208194533_1680776542118219_7672351877934187935_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeH5MtHXuoRP9SRiEelyZglDHOyDn9-LWAIc7IOf34tYAs66ZTshW_yxbnqmEvUoTL5v9Gny5m4LxIoMTJRIv7oh&_nc_ohc=61tUkEvnZkcAX9LZR9M&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=bfe3a8227d5af23fec0ae42b57fcc924&oe=60E7A2F5',
          description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
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
          description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
          images: [
            'assets/images/projects/project-calculator1.jpeg',
            'assets/images/projects/project-calculator2.jpeg'
          ]
        },
        { 
          id: 6,
          name: 'Personal Website',
          code: 'OEGR',
          thumbnail: 'https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
          description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
          images: [
            'assets/images/projects/project-calculator1.jpeg',
            'assets/images/projects/project-calculator2.jpeg'
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

