import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as html2canvas from 'html2canvas';
import * as moment from 'moment';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-cv-root',
  templateUrl: './cv-root.component.html',
  styleUrls: ['./cv-root.component.scss']
})
export class CvRootComponent implements OnInit {
  showDynamicDisplayContent: boolean = false;
  name = 'Omar Eliseo Gomez Ramirez';
  date = moment().format('MM/DD/YYYY');

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

constructor( ) {
}

  ngOnInit(): void {
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
}
