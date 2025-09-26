import { Component, Input } from '@angular/core';
import { Facesnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  templateUrl: './face-snap.html',
  styleUrls: ['./face-snap.scss'],
  imports:[
    NgStyle,
    NgClass,
    DatePipe
  ]
})
export class FaceSnap {
  @Input() faceSnap!: Facesnap;
  snapButtonText: string = 'Oh Snap!';
  unsnapButtonText: string = 'Oh unSnap!';
  userHasSnaped: boolean = false;
  userHasUnSnaped: boolean = false;

onSnap(): void {
    if (this.userHasSnaped) {
      // L'utilisateur annule son snap
      this.faceSnap.snaps--;
      this.snapButtonText = 'Oh Snap!';
      this.userHasSnaped = false;
    } else {
      // L'utilisateur met un snap
      this.faceSnap.snaps++;
      this.snapButtonText = 'Oops, remove Snap!';
      this.userHasSnaped = true;

      // Si avant il avait un unsnap → on l'enlève
      if (this.userHasUnSnaped) {
        this.faceSnap.unsnaps--;
        this.unsnapButtonText = 'Oh unSnap!';
        this.userHasUnSnaped = false;
      }
    }
  }

  onUnsnap(): void {
    if (this.userHasUnSnaped) {
      // L'utilisateur annule son unsnap
      this.faceSnap.unsnaps--;
      this.unsnapButtonText = 'Oh unSnap!';
      this.userHasUnSnaped = false;
    } else {
      // L'utilisateur met un unsnap
      this.faceSnap.unsnaps++;
      this.unsnapButtonText = 'Oops, remove unSnap!';
      this.userHasUnSnaped = true;

      // Si avant il avait un snap → on l'enlève
      if (this.userHasSnaped) {
        this.faceSnap.snaps--;
        this.snapButtonText = 'Oh Snap!';
        this.userHasSnaped = false;
      }
    }
  }
}