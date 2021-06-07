import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { ContactService } from "src/app/services/contact.service";

@Injectable()
export class DataEffects {

    constructor (
        private actions$: Actions,
        private contactService: ContactService
    ) {}
}