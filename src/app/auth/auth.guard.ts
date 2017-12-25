import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { MediaAuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private mediaAuthService: MediaAuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.mediaAuthService.isAuthenticated();
  }
}
