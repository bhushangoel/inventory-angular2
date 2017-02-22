//importing modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

//components
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ManageComponent} from './components/manage/manage.component';
import {AddProductComponent} from './components/addProduct/addProduct.component';
import {EditProductComponent} from './components/editProduct/editProduct.component';

//services
import {SharedService} from './components/shared.service';

//pipes
import {TruncatePipe} from './components/pipes';

//Routes
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'manage', component: ManageComponent},
    {path: 'manage/product/add', component: AddProductComponent},
    {path: 'manage/product/edit/:id', component: EditProductComponent},
    {path: '**', component: HomeComponent}
];

//decorator
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule],
    declarations: [AppComponent, HomeComponent, ManageComponent, AddProductComponent, TruncatePipe, EditProductComponent],
    bootstrap: [AppComponent],
    providers: [SharedService]
})

export class AppModule {

}