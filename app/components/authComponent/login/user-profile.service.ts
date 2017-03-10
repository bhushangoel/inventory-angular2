import {Injectable} from '@angular/core';

@Injectable()
export class UserProfileService {
    isLoggedIn = false;

    constructor() {

    }

    setLoggedInStatus(status) {
        console.log('status: ', status);
        this.isLoggedIn = status;
        console.log('this.isLoggedIn : ', this.isLoggedIn)
    }

    getLoggedInStatus() {
        return this.isLoggedIn;
    }
}