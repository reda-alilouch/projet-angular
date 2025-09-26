export class Facesnap {
  location?: string;
  constructor(public title: string,
                public description: string,
                public createdAt: Date,
                public snaps: number,
                public unsnaps: number,
                public imageUrl: string,
              ) {}
  setLocation(location: string) {
    this.location = location;
  }
}