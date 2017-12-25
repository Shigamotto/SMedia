import { Component } from '@angular/core';
import { MediaAuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private mediaAuthService: MediaAuthService
  ){ }

}
