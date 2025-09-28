import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../face-snap/face-snap';
import { Facesnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
  imports: [FaceSnap],
})
export class FaceSnapList implements OnInit{
  faceSnaps!: Facesnap[];
  constructor (private faceSnapsService: FaceSnapsService) {}
    
    ngOnInit(): void {
      this.faceSnaps = this.faceSnapsService.getFaceSnaps();
    }
}
