import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
  { path: 'facesnaps', component: FaceSnapList },
  { path: '', component: LandingPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
