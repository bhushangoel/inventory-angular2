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
var home_component_1 = require('./components/home/home.component');
var manage_component_1 = require('./components/manage/manage.component');
var addProduct_component_1 = require('./components/addProduct/addProduct.component');
var editProduct_component_1 = require('./components/editProduct/editProduct.component');
var login_component_1 = require('./components/authComponent/login/login.component');
var signup_component_1 = require('./components/authComponent/signup/signup.component');
//Routes
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'manage', component: manage_component_1.ManageComponent },
    { path: 'manage/product/add', component: addProduct_component_1.AddProductComponent },
    { path: 'manage/product/edit/:id', component: editProduct_component_1.EditProductComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.RoutableComponents = [
    home_component_1.HomeComponent,
    manage_component_1.ManageComponent,
    addProduct_component_1.AddProductComponent,
    editProduct_component_1.EditProductComponent,
    login_component_1.LoginComponent,
    signup_component_1.SignupComponent
];
//# sourceMappingURL=app-routing.module.js.map