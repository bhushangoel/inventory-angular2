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
var router_1 = require('@angular/router');
var shared_service_1 = require('../shared.service');
var productDetail = (function () {
    function productDetail(route, sharedService) {
        this.route = route;
        this.sharedService = sharedService;
        this.details = {};
    }
    productDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['id']; })
            .do(function (id) { return _this.id = +id; })
            .subscribe(function (id) { return _this.getProduct(); });
    };
    productDetail.prototype.getProduct = function () {
        var _this = this;
        this.sharedService.getData("products/" + this.id)
            .subscribe(function (result) {
            _this.details = result;
        });
    };
    productDetail = __decorate([
        core_1.Component({
            selector: 'productDetail',
            templateUrl: 'app/components/productDetail/productDetail.component.html',
            providers: [shared_service_1.SharedService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, shared_service_1.SharedService])
    ], productDetail);
    return productDetail;
}());
exports.productDetail = productDetail;
//# sourceMappingURL=productDetail.component.js.map