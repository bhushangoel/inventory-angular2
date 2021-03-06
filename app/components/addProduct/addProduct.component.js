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
var AddProductComponent = (function () {
    function AddProductComponent(sharedService) {
        this.sharedService = sharedService;
        this.formData = {};
        this.showPreview = false;
        this.heading = 'Add New Product';
        this.loadCategories();
    }
    AddProductComponent.prototype.loadCategories = function () {
        var _this = this;
        this.sharedService.getData('categories')
            .subscribe(function (result) { return _this.categories = result; });
    };
    AddProductComponent.prototype.save = function (addForm) {
        var _this = this;
        if (!addForm.valid) {
            return;
        }
        else {
            this.showPreview = true;
            this.sharedService.addData('products', this.formData)
                .subscribe(function (result) {
                _this.formData = {};
            });
        }
    };
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'addproduct',
            templateUrl: 'app/components/addProduct/addProduct.component.html',
            providers: [shared_service_1.SharedService]
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService])
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
//# sourceMappingURL=addProduct.component.js.map