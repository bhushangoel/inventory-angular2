import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {ManageComponent} from './components/manage/manage.component';
import {AddProductComponent} from './components/addProduct/addProduct.component';
import {EditProductComponent} from './components/editProduct/editProduct.component';
import {LoginComponent} from './components/authComponent/login/login.component';
import {SignupComponent} from './components/authComponent/signup/signup.component';
import {productDetail} from './components/productDetail/productDetail.component';

//auth guard
import {CanActivateAuthGuard} from './components/can-activate.service';

//Routes
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'manage',
        component: ManageComponent,
        canActivate: [CanActivateAuthGuard],
        canActivateChild: [CanActivateAuthGuard],
        children: [
            {path: 'product/add', component: AddProductComponent},
            {path: 'product/edit/:id', component: EditProductComponent}
        ]
    },
    {path: 'product/:id', component: productDetail},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}

export const RoutableComponents = [
    HomeComponent,
    ManageComponent,
    AddProductComponent,
    EditProductComponent,
    LoginComponent,
    SignupComponent,
    productDetail
];