import {Injectable} from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    Route,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import {UserProfileService} from './authComponent/login/user-profile.service';

@Injectable()
export class CanActivateAuthGuard implements CanActivate, CanActivateChild {
    constructor(public userProfileService: UserProfileService, private router: Router) {
    }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(next, state);
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('this.userProfileService.getLoggedInStatus: ', this.userProfileService.getLoggedInStatus())
        if (this.userProfileService.getLoggedInStatus()) {
            return true;
        }
        this.router.navigate(['/login'], {queryParams: {redirectTo: state.url}});
        return false;
    }
}