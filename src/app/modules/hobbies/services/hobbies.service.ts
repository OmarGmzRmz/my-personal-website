import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { Hobbie } from '../interfaces/hobbie';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {
  hobbies = [
    {
      id: '1',
      name: 'Football Soccer',
      imageUrl: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: `
      <p>I love playing soccer with my friends that I see every weekend</p>
      <p>Football is a sport that joins a lot of people together so we can have a great time doing something that is very enjoyable</p>
      <p>My favorite teams are <b>Chivas</b> and <b>Liverpool</b></p>
      `
    },
    {
      id: '2',
      name: 'Video Games',
      imageUrl: 'https://images.pexels.com/photos/139038/pexels-photo-139038.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: `
      <p>I love playing video games with my brother and friends</p>
      <p>Video games is a kind of have a great time with your friends</p>
      <p>My favorite video games are <b>FIFA</b> and <b>GTA V</b></p>
      `
    }
  ];

  constructor(
    private loaderService: LoaderService 
  ) { }

  getHobbies(): Observable<Hobbie[]>   {
    this.loaderService.show();
    return new Observable(obs => {
      setTimeout(() => {
        obs.next(this.hobbies);
        obs.complete();
        this.loaderService.hide();
      }, 4000);
    });
  }
}
