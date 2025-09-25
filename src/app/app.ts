import { Component, OnInit, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { Facesnap } from './models/face-snap';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [FaceSnap],
})
export class App implements OnInit{
  mySnap! : Facesnap;
  myOtherSnap! : Facesnap;
  myLastSnap!: Facesnap;
  ngOnInit(): void {
      this.mySnap = new Facesnap(
        "Mon premier FaceSnap",
        "Mon premier FaceSnap description",
        new Date(),
        0,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      );
      this.myOtherSnap = new Facesnap(
        "Mon deuxième FaceSnap",
        "Mon deuxième FaceSnap description",
        new Date(),
        5,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      );
      this.myLastSnap = new Facesnap(
        "Mon troisième FaceSnap",
        "Mon troisième FaceSnap description",
        new Date(),
        10,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      );
  }
}
