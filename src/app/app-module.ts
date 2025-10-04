import { LOCALE_ID, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { Header } from './header/header';
import { LandingPage } from './landing-page/landing-page';

@NgModule({
  declarations: [LandingPage],
  imports: [BrowserModule, App, FaceSnapList, Header],
  providers: [provideBrowserGlobalErrorListeners(), { provide: LOCALE_ID, useValue: 'fr-FR' }],
})
export class AppModule {}
