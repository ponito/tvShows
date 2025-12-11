import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routeConfig),
    ...appConfig.providers, // Füge die Firebase-Konfiguration hinzu
  ],
}).catch((err) => console.error(err));
