import { Injectable } from '@angular/core';
import { SocialUser } from "angular4-social-login";
import { AuthService } from "angular4-social-login";
import { Router } from '@angular/router';

@Injectable()
export class MediaAuthService {
  public user:SocialUser;

  constructor(
    private authService:AuthService,
    private router: Router,
  ) {};

  public getUser(): SocialUser{
    return this.user;
  }

  public setUser(user: SocialUser): void {
    this.user = user;
  }

  public signOut(): void {
    this.user = null;
    this.authService.signOut();
    this.router.navigate(['./']);
  }

  public isAuthenticated(): boolean {
    return this.user != null;
  }

}
