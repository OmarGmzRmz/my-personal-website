import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';
import { ProjectsYear } from '../../services/view-models/projects-year.interface';

@Component({
  selector: 'app-projects-root',
  templateUrl: './projects-root.component.html',
  styleUrls: ['./projects-root.component.scss']
})
export class ProjectsRootComponent implements OnInit, OnDestroy {
  years: ProjectsYear[] = [];
  yearsSubscription: Subscription = new Subscription;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.yearsSubscription = this.projectsService.getProjectsYears().subscribe((years: ProjectsYear[]) => {
      this.years = years;
    });
  }

  ngOnDestroy(): void {
    this.yearsSubscription.unsubscribe();
  }

}
