import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { RouterState, StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { ProjectsStoreModule } from "./projects/projects.store.module";
import { metaReducers } from './root-reducers';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot({}, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }), //This is because we have feature stores
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains the lasts 25 states
            logOnly: environment.production, // Restrict NgRx Dev Tools Extension functionaliity when running the app in production mood
        }),
        EffectsModule.forRoot([]),
        ProjectsStoreModule
    ]
})
export class RootStoreModule {}