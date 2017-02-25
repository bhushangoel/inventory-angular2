import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../shared.service';

@Component({
    selector: 'signup',
    templateUrl: 'app/components/authComponent/signup/signup.component.html',
    providers: [SharedService]
})

export class SignupComponent implements OnInit {
    constructor(private sharedService: SharedService) {
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        })
    }

    submit({value, valid}) {
        if (!valid) {
            return;
        }
        else {
            this.sharedService.addData('users', value)
                .subscribe(result => console.log('result: ', result))

        }
    }
}