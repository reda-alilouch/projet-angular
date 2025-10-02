import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

registerLocaleData(fr.default);

bootstrapApplication(App).catch((err) => console.error(err));
