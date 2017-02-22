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
var shared_service_1 = require('../shared.service');
var ManageComponent = (function () {
    function ManageComponent(sharedservice) {
        this.sharedservice = sharedservice;
        this.products = [];
    }
    ManageComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ManageComponent.prototype.loadData = function () {
        var _this = this;
        this.sharedservice.getData('products')
            .subscribe(function (products) {
            _this.products = products;
        });
    };
    ManageComponent = __decorate([
        core_1.Component({
            selector: 'manage',
            templateUrl: 'app/components/manage/manage.component.html',
            providers: [shared_service_1.SharedService]
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService])
    ], ManageComponent);
    return ManageComponent;
}());
exports.ManageComponent = ManageComponent;
//# sourceMappingURL=manage.component.js.map