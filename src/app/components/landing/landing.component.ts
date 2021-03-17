import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ContactService } from 'src/app/services/contact.service';
import { DialogService } from 'src/app/services/dialog.service';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  //#region Swiper
  index = 0;
  config: SwiperConfigInterface = {
    autoplay: {
      delay: 14000,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  };
  ////#endregion

  // Typed
  typed: any;
  showElement1 = false;
  showElement2 = false;
  showElement3 = false;

/* #region  Particles */
  id = 'tsparticles';
  particlesOptions = {
    "interactivity": {
      "events": {
        "onHover": {
          "enable": true,
          "mode": "repulse"
        }
      },
      "modes": {
        "bubble": {
          "distance": 400,
          "duration": 2,
          "opacity": 0.8,
          "size": 30
        },
        "grab": {
          "distance": 400
        }
      }
    },
    "particles": {
      "color": {
        "value": "#ffffff"
      },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "enable": true
      },
      "number": {
        "value": 80
      },
      "opacity": {
        "random": true,
        "value": 0.5,
        "animation": {
          "enable": true,
          "minimumValue": 0.1,
          "speed": 3
        }
      },
      "size": {
        "random": true,
        "value": 10,
        "animation": {
          "minimumValue": 0.1,
          "speed": 20
        }
      },
      "stroke": {
        "color": {
          "value": "#000000",
          "animation": {
            "enable": false,
            "speed": 1,
            "sync": true
          }
        }
      }
    }
  }
/* #endregion */

//#region Contact form
contactForm = new FormGroup({
  toggleControl: new FormControl('whatsapp', [Validators.required]),
  nameControl: new FormControl('', [Validators.required]),
  emailControl: new FormControl('', [Validators.email, (control: AbstractControl): {[key: string]: any} | null => {
    const regularExpression = /(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-][a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const match =regularExpression.test(control.value);
    if (!match) {
      return {noMatchRegex: { errorMessage: 'Must enter a valid email address.'}}
    }
    return null;
  }]),
  messageControl: new FormControl('', [Validators.required, Validators.minLength(10)])
});
isSendEmail = false;//#endregion

//  Practice
@ViewChild('myInput1', {static: true}) myNumericInput1: ElementRef | undefined;
@ViewChild('myInput2', {static: true}) myNumericInput2: ElementRef | undefined;

  constructor(
    private contactService: ContactService,
    private dialogService: DialogService
    ) { }

  ngOnInit(): void {
    const options0: TypedOptions = {
      strings: [
        'Welcome to my personal website'
      ],
      typeSpeed: 50,
      backDelay: 750,
      showCursor: true,
      cursorChar: '_',
      loop: false,
      loopCount: 0,
      onComplete: function(self) { (<any>self).cursor.remove() }
    };
    if (!!this.typed) this.typed.destroy();
    this.typed = new Typed('.typed-element-0', options0);

    setTimeout(() => {
      this.showElement1 = true;
    }, 3000);
  
    setTimeout(() => {
      this.showElement2 = true;
      setTimeout(() => {
        const options2: TypedOptions = {
          strings: [
            'Mechatronic Engineer',
            'Omar Eliseo Gómez Ramírez'
          ],
          typeSpeed: 50,
          backDelay: 750,
          backSpeed: 150,
          showCursor: true,
          cursorChar: '_',
          loop: false,
          loopCount: 0
          };
        this.typed = new Typed('.typed-element-2', options2);
      }, 1);
    }, 4000);
    //#endregion

    //#region  Contact Form
    this.contactForm.controls.toggleControl.valueChanges.subscribe((value: string) => {
      switch (value) {
        case 'whatsapp':
          this.isSendEmail = false;
          break;
        case 'email':
          this.isSendEmail = true;
          break;
        default:
          this.isSendEmail = false;
          break;
      }
    });
  }
  //#region Contact Form
  submitContactForm() {
    if (!this.isSendEmail) {
      // Send WhatsApp
      if (
        this.contactForm.controls.nameControl.valid &&
        this.contactForm.controls.messageControl.valid
        ) {
          const name = this.contactForm.controls.nameControl.value;
          const message = this.contactForm.controls.messageControl.value;
          const phoneNumber = '5214525255286';
          const whatsAppMessage = `Hola soy ${name}. ${message} `
          const encoded = encodeURIComponent(whatsAppMessage); // Ex. Hola. Como estas? -> Hola%20
          window.open(`https://wa.me/${phoneNumber}?text=${encoded}`);
        } else {
          const message = 'Submitted form is valid';
          const options = ['Ok'];
          this.dialogService.openDialog(message, options).subscribe((result: string) => {

          });
        }
    } else {
      if (
        this.contactForm.controls.nameControl.valid &&
        this.contactForm.controls.messageControl.valid &&
        this.contactForm.controls.emailControl.valid
      ) {
        const name = this.contactForm.controls.nameControl.value;
        const email = this.contactForm.controls.emailControl.value;
        const message = this.contactForm.controls.messageControl.value;
        this.contactService.sendEmail(name, email, message);
        // TODO: Call email serivce
      } else {
        const message = 'Submitted form is valid';
        const options = ['Ok'];
        this.dialogService.openDialog(message, options).subscribe((result: string) => {

        });
      }
  }
}

  //Practice
  onButtonClick() {
    const a = this.myNumericInput1?.nativeElement.valueAsNumber;
    const b = this.myNumericInput2?.nativeElement.valueAsNumber;
    alert(a + b);
  }
  //Practice
  onInputBlur(event: any) {
  }
}
