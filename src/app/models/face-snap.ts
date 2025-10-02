export class Facesnap {
  location?: string;
  id: string;
  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public snaps: number,
    public unsnaps: number,
    public imageUrl: string,
  ) {
    this.id = crypto.randomUUID().substring(0, 10);
    console.log(this);
  }
  setLocation(location: string) {
    this.location = location;
  }
  withLocation(location: string): Facesnap {
    this.setLocation(location);
    return this;
  }
}
