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

//Routes
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'manage', component: ManageComponent},
    {path: '**', component: HomeComponent}
];

//decorator
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule],
    declarations: [AppComponent, HomeComponent, ManageComponent],
    bootstrap: [AppComponent]
})

export class AppModule {

}