export class ShowDTO {
  public id: number;
  public title: string;
  public image: { medium: string, original: string };
  public summary: string;

  constructor(id: number, title:string, image: { medium: string, original: string}, summary: string) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.summary = summary;
  }
}
