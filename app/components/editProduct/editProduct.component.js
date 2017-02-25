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
var EditProductComponent = (function () {
    function EditProductComponent(route, sharedService) {
        this.route = route;
        this.sharedService = sharedService;
        this.formData = {};
        this.loadCategories();
    }
    EditProductComponent.prototype.loadCategories = function () {
        var _this = this;
        this.sharedService.getData('categories')
            .subscribe(function (result) { return _this.categories = result; });
    };
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['id']; })
            .do(function (id) { return _this.id = +id; })
            .subscribe(function (id) { return _this.getProduct(); });
    };
    EditProductComponent.prototype.getProduct = function () {
        var _this = this;
        this.sharedService.getData("products/" + this.id)
            .subscribe(function (result) {
            _this.formData = result;
        });
    };
    EditProductComponent = __decorate([
        core_1.Component({
            selector: 'editproduct',
            templateUrl: 'app/components/addProduct/addProduct.component.html',
            providers: [shared_service_1.SharedService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, shared_service_1.SharedService])
    ], EditProductComponent);
    return EditProductComponent;
}());
exports.EditProductComponent = EditProductComponent;
//# sourceMappingURL=editProduct.component.js.map