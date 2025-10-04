import { Component, Input, Inject } from '@angular/core';
import { Facesnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap',
  standalone: true,
  templateUrl: './face-snap.html',
  styleUrls: ['./face-snap.scss'],
  imports: [NgStyle, NgClass, DatePipe],
})
export class FaceSnap {
  @Input() faceSnap!: Facesnap;
  snapButtonText: string = 'Oh Snap!';
  unsnapButtonText: string = 'Oh unSnap!';
  userHasSnaped: boolean = false;
  userHasUnSnaped: boolean = false;

  constructor(private faceSnapsService: FaceSnapsService) {}

  onSnap(): void {
    if (this.userHasSnaped) {
      this.faceSnapsService.removesnapFaceSnapById(this.faceSnap.id);
      this.snapButtonText = 'Oh Snap!';
      this.userHasSnaped = false;
    } else {
      this.faceSnapsService.addsnapFaceSnapById(this.faceSnap.id);
      this.snapButtonText = 'Oops, remove Snap!';
      this.userHasSnaped = true;
      if (this.userHasUnSnaped) {
        this.faceSnapsService.removeunsnapFaceSnapById(this.faceSnap.id);
        this.unsnapButtonText = 'Oh unSnap!';
        this.userHasUnSnaped = false;
      }
    }
  }

  onUnsnap(): void {
    if (this.userHasUnSnaped) {
      this.faceSnapsService.removeunsnapFaceSnapById(this.faceSnap.id);
      this.unsnapButtonText = 'Oh unSnap!';
      this.userHasUnSnaped = false;
    } else {
      this.faceSnapsService.addunsnapFaceSnapById(this.faceSnap.id);
      this.unsnapButtonText = 'Oops, remove unSnap!';
      this.userHasUnSnaped = true;
      if (this.userHasSnaped) {
        this.faceSnapsService.removesnapFaceSnapById(this.faceSnap.id);
        this.snapButtonText = 'Oh Snap!';
        this.userHasSnaped = false;
      }
    }
  }
}
