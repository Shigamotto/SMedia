export class Answer {
  id: number;
  imgPath: string;
  name: string;
  answer: boolean;
  visitors: number;

  constructor(id: number, imgPath:string, name:string, answer: boolean, visitors: number) {
    this.id = id;
    this.imgPath = imgPath,
    this.name = name;
    this.answer = answer;
    this.visitors = visitors;
  }
}
