import {Component} from '@angular/core';
// import {SharedService} from './components/shared.service';
import {UserProfileService} from './components/authComponent/login/user-profile.service';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    constructor(public userService: UserProfileService) {
    }
}