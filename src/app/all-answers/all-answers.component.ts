import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../app.service';
import { MediaAuthService } from "../auth/auth.service";
import { SocialUser } from "angular4-social-login";

@Component({
  selector: 'app-all-answers',
  templateUrl: './all-answers.component.html',
  styleUrls: ['./all-answers.component.css']
})
export class AllAnswersComponent implements OnInit {
  SearchItem = '';
  user: SocialUser;

  constructor(
    private answersService: AnswersService,
    private mediaAuthService:MediaAuthService
  ) {
    this.user = this.mediaAuthService.getUser();
  }

  ngOnInit() {
  }

  ngOnChange() {
    console.log(this.SearchItem);
  }
}
