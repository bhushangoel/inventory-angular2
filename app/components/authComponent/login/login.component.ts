import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../shared.service';
import {UserProfileService} from '../../authComponent/login/user-profile.service';

@Component({
    selector: 'login',
    templateUrl: 'app/components/authComponent/login/login.component.html'
})

export class LoginComponent implements OnInit {
    matched: boolean = false;

    constructor(private sharedService: SharedService, public userService: UserProfileService) {
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        })
    }

    submit({value, valid}) {
        if (!valid) {
            return;
        }
        else {
            this.sharedService.getData('users')
                .subscribe(result => {
                    console.log('result: ', result, 'value passed: ', value)
                    result.forEach((record) => {
                        if ((record.email == value.email && record.password == value.password) && !this.matched) {
                            this.matched = true;
                        }
                        else {
                            this.matched = false;
                        }
                    });

                    if (!this.matched)
                        console.log('wrong credentials entered');
                    this.userService.setLoggedInStatus(this.matched);
                })

        }
    }
}