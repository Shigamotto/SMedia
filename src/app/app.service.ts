import { Injectable } from '@angular/core';
import { Answer } from './app.model';

@Injectable()
export class AnswersService {
  private nextId: number;

  constructor() {
    let lengthLS = localStorage.length;
    console.log(lengthLS);
    if (localStorage.length < 1){
      let answers = [
        new Answer(0, 'https://i.pinimg.com/736x/b8/79/0a/b8790a5040be8029802e823fd76079c2--face-portrait-photography-freckles-photography.jpg', 'anubeeska@ya.ru', true, 5),
        new Answer(1, 'https://i.pinimg.com/736x/b8/79/0a/b8790a5040be8029802e823fd76079c2--face-portrait-photography-freckles-photography.jpg', 'shigamotto@gmail.com', false, 0),
      ];
      this.setAnswer(answers);
    }

    let answers = this.getAnswers;
    if (answers.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = answers[answers.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  public addAnswer(imgPath:string, name: string, answer: boolean, visitors:number): void {
    let newAnswer = new Answer(this.nextId, imgPath, name, answer, visitors);
    let answers = this.getAnswers();
    answers.push(newAnswer);

    this.setAnswer(answers);
    this.nextId++;
  }

  public getAnswers(): Answer[] {
    let localStorageAnswers = JSON.parse(localStorage.getItem('answers'));
    return localStorageAnswers == null ? [] : localStorageAnswers.answers;
  }

  public removeAnswer(id: number): void {
    let answers = this.getAnswers();
    let newAnswers = answers.filter((answers)=> answers.id != id);
    this.setAnswer(newAnswers);
  }

  public setAnswer(answers:Answer[]): void {
    localStorage.setItem('answers', JSON.stringify({answers: answers}));
  }

}
