import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import {HttpClientModule} from "@angular/common/http";
import { enableProdMode, importProvidersFrom } from "@angular/core";


/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
*/


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)],
}).catch((err) => console.error(err));
