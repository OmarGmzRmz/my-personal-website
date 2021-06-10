import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as html2canvas from 'html2canvas';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { single } from './data';

@Component({
  selector: 'app-cv-root',
  templateUrl: './cv-root.component.html',
  styleUrls: ['./cv-root.component.scss']
})
export class CvRootComponent implements OnInit {
  showDynamicDisplayContent: boolean = false;
  name = 'Omar Eliseo Gomez Ramirez';
  date = moment().format('MM/DD/YYYY');
  routerFragmentSubscription: Subscription | undefined;
  selectedTabIndex : number | undefined;

  // ngClass directive example
  isPurple = true;
  isBlue = false;

  // NgStyle directive example
  leftPanelFontColor = 'white';

  // ngFor directive example
  // TODO : Fetch this information from database
  sections: any = [{
    title: 'Education',
    places: [{
      position: 'Bachelor in Mechatronics Engineering',
      startDate: new Date('08/01/2018'),
      endDate: null,
      place: 'Universidad Michoacana de San Nicolas de Hidalgo (UMSNH)',
      points: [
        'Mechatronics Engineering is an integrating discipline in the areas of mechanics, electronics, electrical and computer systems' 
      ]
    }, {
      position: 'Preparatoria',
      startDate: new Date('08/01/14'),
      endDate: new Date('05/30/2017'),
      place: 'Escuela Preparatoria Gral. Lazaro Cardenas (EPLC)'
    }]
  }, {
    title: 'Achivements',
    places: [{
      position: 'Intermediate English course',
      startDate: new Date('08/01/2015'),
      endDate: new Date('01/30/17'),
      place: 'Escuela Preparatoria Lic. Eduardo Ruiz (EPLER)',
      points: [
        ''
      ]
    }]
  }
];

pdfSrc = 'assets/prueba.pdf';

//#region My Time chart
single = [];
view: any = [700, 200];
// view = undefined;

// options
gradient: boolean = true;
showLegend: boolean = true;
showLabels: boolean = true;
isDoughnut: boolean = false;

colorScheme = {
  domain: ['#00008B', '#0000FF', '#4169E1', '#00BFFF', '#87CEEB', '#E0FFFF']
};
//#endregion

constructor(
  @Inject(DOCUMENT) private document: any,
  private router: Router,
  private route: ActivatedRoute
 ) {
   this.router.events.subscribe(event => {
     if (event instanceof NavigationEnd) {
       const fragment = event.url.split('#')[1];
       if (fragment) {
         return; 
       }
       window.scrollTo(0, 0);
     }
     return;
   });
   
   //Set the current tab getting route fragment if any
   this.routerFragmentSubscription = this.route.fragment.subscribe((fragment: string) => {
     if (fragment) {
       switch (fragment) {
         case 'cv':
          this.selectedTabIndex = 0;
           break;
          case 'resume':
          this.selectedTabIndex = 1;
           break;
           case 'activities':
          this.selectedTabIndex = 2;
           break;
           default:
            this.selectedTabIndex = 0;
            break;
       }
     }
   });

   // My Time Chart
   Object.assign(this, { single });
  }

  

  ngOnInit(): void {
  }

  onTabNavigation(tabIndex: number) {
    const fragments = ['cv', 'resume', 'activities'];
    this.router.navigate(['./'], {
      fragment: fragments[tabIndex],
      relativeTo: this.route,
      replaceUrl: true
    });
  }

  changeLeftPanelStyle(color: string): void {

    switch(color) {
      case 'purple':
        this.isPurple = true; this.isBlue = false; this.leftPanelFontColor = 'white'
        break;
      case 'blue':
        this.isPurple = false; this.isBlue = true; this.leftPanelFontColor = 'white'
        break;
      case 'gray':
        this.isPurple = false; this.isBlue = false; this.leftPanelFontColor = 'black'
        break;
      default:
        this.isPurple = true; this.isBlue = false; this.leftPanelFontColor = 'white'
    }
  }

  async downloadResume() {
    this.document.getElementById('html-element').style.scrollBehavior = 'unset';
    window.scrollTo(0, 0);
    setTimeout(async () => {
      let element: HTMLElement;
      element = <HTMLElement>(document.querySelector('#document'));
      const canvas = await html2canvas.default(element);
      /* document.body.appendChild(canvas); */
      const contentDataURL = canvas.toDataURL('image/png');
      const download = document.createElement('a');
      download.href = contentDataURL;
      download.download = ``;
      download.click();
    }, 1);
  }

async downloadResumeZip() {
  window.open(`/assets/SimExpandPalabraYCapacidad.zip`);
}

//#region My Time
onSelect(data: any): void {
  console.log('Item clicked', JSON.parse(JSON.stringify(data)));
}

onActivate(data: any): void {
  console.log('Activate', JSON.parse(JSON.stringify(data)));
}

onDeactivate(data: any): void {
  console.log('Deactivate', JSON.parse(JSON.stringify(data)));
}
//#endregion

}
