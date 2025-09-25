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
  faceSnaps!: Facesnap[];

  mySnap! : Facesnap;
  myOtherSnap! : Facesnap;
  myLastSnap!: Facesnap;
  ngOnInit(): void {
    this.faceSnaps = [
       new Facesnap(
        "Mon premier FaceSnap",
        "Mon premier FaceSnap description",
        new Date(),
        0,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      ),
      new Facesnap(
        "Mon deuxième FaceSnap",
        "Mon deuxième FaceSnap description",
        new Date(),
        5,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      ),
      new Facesnap(
        "Mon troisième FaceSnap",
        "Mon troisième FaceSnap description",
        new Date(),
        159,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      ),
    ];
      this.faceSnaps[1].setLocation("Paris");
  }
}
