import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Subscription } from 'rxjs';
import { Project } from '../../services/view-models/project.interface';

@Component({
  selector: 'app-porject-detail',
  templateUrl: './porject-detail.component.html',
  styleUrls: ['./porject-detail.component.scss']
})
export class PorjectDetailComponent implements OnInit, OnDestroy {
  projectDetailInfoSubscription: Subscription | undefined;
  project: Project | undefined;
   //#region Swiper
   index = 0;
   config: SwiperConfigInterface = {
     spaceBetween: 30,
     effect: 'fade',
     autoplay: {
       delay: 8000,
       disableOnInteraction: true,
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
       type: "fraction",
     },
   };
   //#endregion
 
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.projectDetailInfoSubscription = this.route.data.subscribe((data: any) => {
      if (data.projectDetailInfo.project) {
        this.project = data.projectDetailInfo.project;
      } else {
        alert('Project not found');
      }
    });
  }

  ngOnDestroy(): void {
    this.projectDetailInfoSubscription?.unsubscribe();
  }
  navigateToProjects() {
    this.router.navigate(['/projects']);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
