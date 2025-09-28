import { Component, OnInit, signal } from '@angular/core';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { Header } from './header/header';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [FaceSnapList, Header],
})
export class App {
  
}
