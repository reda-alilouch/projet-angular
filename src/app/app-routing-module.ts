import { Routes } from '@angular/router';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
  { 
    path: 'facesnaps', 
    component: FaceSnapList,
    title: 'FaceSnaps - Liste'
  },
  { 
    path: '', 
    component: LandingPage,
    title: 'Accueil - FaceSnaps'
  },
  { 
    path: '**', 
    redirectTo: '',
    pathMatch: 'full'
  }
];
