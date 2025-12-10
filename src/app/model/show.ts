
export class Show {
  public uid: string;
  public id: number;
  public title: string;
  public image?: string;
  public summary?: string;
  constructor(uid: string, id: number, title:string, image?:string, summary?:string) {
    this.uid = uid;
    this.id = id;
    this.title = title;
    this.image = image;
    this.summary = summary;
  }
}
