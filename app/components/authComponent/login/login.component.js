"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var shared_service_1 = require('../../shared.service');
var user_profile_service_1 = require('../../authComponent/login/user-profile.service');
var LoginComponent = (function () {
    function LoginComponent(sharedService, userService) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.matched = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    LoginComponent.prototype.submit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            return;
        }
        else {
            this.sharedService.getData('users')
                .subscribe(function (result) {
                console.log('result: ', result, 'value passed: ', value);
                result.forEach(function (record) {
                    if ((record.email == value.email && record.password == value.password) && !_this.matched) {
                        _this.matched = true;
                    }
                    else {
                        _this.matched = false;
                    }
                });
                if (!_this.matched)
                    console.log('wrong credentials entered');
                _this.userService.setLoggedInStatus(_this.matched);
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/components/authComponent/login/login.component.html'
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService, user_profile_service_1.UserProfileService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map