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
var http_1 = require('@angular/http');
require('./const.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var const_service_1 = require("./const.service");
var Products = (function () {
    function Products(name, description, category, price, quantity) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }
    return Products;
}());
exports.Products = Products;
var SharedService = (function () {
    function SharedService(http) {
        this.http = http;
    }
    //using rxJs to fetch data
    SharedService.prototype.getData = function (url) {
        return this.http.get("" + const_service_1.config.apiPathProd + url)
            .map(function (response) { return response.json(); });
    };
    SharedService.prototype.addData = function (url, data) {
        return this.http.post("" + const_service_1.config.apiPathProd + url, data)
            .map(function (response) { return console.log(response); });
    };
    SharedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map