import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app-module';

bootstrapApplication(AppComponent, appConfig)
  .catch((err: Error) => console.error(err));
