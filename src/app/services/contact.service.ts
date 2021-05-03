import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private loaderService: LoaderService,
    private http: HttpClient
    ) { }

  sendEmail(name: string, email: string, message: string): Observable<string> {
    this.loaderService.show();
    const url = 'https://eklp4v8rx7.execute-api.us-east-2.amazonaws.com/default/SendEmailFromPersonalWebsiteMessage';
    const infoFromSenderDTO = {
      "name": name,
      "email": email,
      "message": message
    };
    return this.http.post<any>(url, infoFromSenderDTO).pipe(
      tap(()=> {
        this.loaderService.hide();
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        alert(`Error sending message. Try again later. ${errorResponse.error.message}`);
        this.loaderService.hide();
        throw errorResponse.error; 
      })
    ); 
  }

  sendFeedback(description: string, screenshot: string): Observable<string> {
    this.loaderService.show();
    const url = 'https://eklp4v8rx7.execute-api.us-east-2.amazonaws.com/default/SendFeedbackFromPersonalWebsite';
    const sendFeedbackDTO = {description, screenshot};  // DTO:  Data Transfer Object
    return this.http.post<any>(url, sendFeedbackDTO).pipe(
      tap(() => {
        this.loaderService.hide();
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        alert(`Error sending feedback. Try again later. ${errorResponse.error.message}`);
        this.loaderService.hide();
        throw errorResponse.error;
      })
    );
  }
}

