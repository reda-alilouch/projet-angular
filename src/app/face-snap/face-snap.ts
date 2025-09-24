import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  templateUrl: './face-snap.html',
  styleUrls: ['./face-snap.scss']
})
export class FaceSnap implements OnInit{
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: string;
  userHasSnaped!: boolean;
  ngOnInit(): void {
      this.title = "Mon premier FaceSnap";
      this.description = "Mon premier FaceSnap description";
      this.createdAt = new Date();
      this.snaps = 0;
      this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
      this.snapButtonText = 'Oh Snap!';
      this.userHasSnaped = false;
    }
  onSnap(): void {  
    if (this.userHasSnaped) {
      this.snaps--;
      this.snapButtonText = 'Oh Snap!';
      this.userHasSnaped = false;
    } else {
      this.snaps++;
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnaped = true;
    }
  }
}
