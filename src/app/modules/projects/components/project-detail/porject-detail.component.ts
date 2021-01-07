import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Resolved data: ' ,this.route.snapshot.data);
    this.projectDetailInfoSubscription = this.route.data.subscribe((projectDetailInfo) => {
      if (projectDetailInfo.project) {
        this.project = projectDetailInfo.project;
        console.log(this.project);
      } else {
        alert('Project not fuond');
      }
    });
  }

  ngOnDestroy(): void {
    this.projectDetailInfoSubscription?.unsubscribe();
  }
}
