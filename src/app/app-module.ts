import { LOCALE_ID, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FaceSnap } from './face-snap/face-snap';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { Header } from './header/header';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, App, FaceSnapList, Header],
  providers: [provideBrowserGlobalErrorListeners(), { provide: LOCALE_ID, useValue: 'fr-FR' }],
})
export class AppModule {}
