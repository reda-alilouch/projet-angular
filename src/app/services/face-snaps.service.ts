import { Injectable } from '@angular/core';
import { Facesnap } from '../models/face-snap';
@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: Facesnap[] = [
            new Facesnap(
                "Mon premier FaceSnap",
                "Mon premier FaceSnap description",
                new Date(),
                0,
                3,
                'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
                ),
                new Facesnap(
                  "Mon deuxième FaceSnap",
                  "Mon deuxième FaceSnap description",
                  new Date(),
                  5,
                  10,
                  'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
                ).withLocation('à la montagne'),
                new Facesnap(
                  "Mon troisième FaceSnap",
                  "Mon troisième FaceSnap description",
                  new Date(),
                  159,
                  50,
                  'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
                ),
            ];
    getFaceSnaps(): Facesnap[] {
    return [...this.faceSnaps];
  }
  snapFaceSnapById(faceSnapId: string): void {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    foundFaceSnap.addSnap();
}
}