import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnswersService } from '../app.service';
import { Router } from '@angular/router';
import { MediaAuthService } from "../auth/auth.service";
import { SocialUser } from "angular4-social-login";
import {Answer} from "../app.model";

@Component({
  selector: 'app-my-answer',
  templateUrl: './my-answer.component.html',
  styleUrls: ['./my-answer.component.css']
})

export class MyAnswerComponent implements OnInit {
  id: number;
  editMode = false;
  user: SocialUser;
  myAnswerForm: FormGroup;

  constructor(
    private mediaAuthService: MediaAuthService,
    private answersService: AnswersService,
    private router: Router
  ) {
    this.user = this.mediaAuthService.getUser();
  }

  ngOnInit() {
    this.myAnswerForm = new FormGroup({
      'email': new FormControl(this.user.email, Validators.required),
      'visitors': new FormControl(0),
      'answer': new FormControl(null, this.isNotNull),
      })
  }

  onSubmit(){
    let formValue = this.myAnswerForm.value;
    let answers = this.answersService.getAnswers();
    for (let answer in answers) {
      if (answer.indexOf(formValue.email)){
        return
      }
    }
    if (formValue.answer != null) {
      this.answersService.addAnswer(
        this.user.photoUrl,
        formValue.email,
        formValue.answer,
        formValue.visitors
      );
      this.router.navigate(['./answers']);
    }
  }

  isNotNull(control: FormControl): {[s:string]: boolean} {
    if (control.value == null) {
      return {'isNotNull':true}
    } else {
      return {'isNotNull':false}
    }
  }

}
