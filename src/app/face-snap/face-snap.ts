import { Component, Input } from '@angular/core';
import { Facesnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  templateUrl: './face-snap.html',
  styleUrls: ['./face-snap.scss']
})
export class FaceSnap {
  @Input() faceSnap!: Facesnap;
  snapButtonText: string = 'Oh Snap!';
  userHasSnaped: boolean = false;

  onSnap(): void {
    if (this.userHasSnaped) {
      this.snap();
    } else {
      this.unSnap();
    }
  }

  snap(): void {
    this.faceSnap.snaps--;
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnaped = false;
  }

  unSnap(): void {
    this.faceSnap.snaps++;
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnaped = true;
  }
}