import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing-module';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
registerLocaleData(fr.default);

bootstrapApplication(App, {
    providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
