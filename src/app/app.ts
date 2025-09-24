import { Component, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [FaceSnap],
})
export class App {
}
