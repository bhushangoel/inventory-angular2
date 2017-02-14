//importing modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

//components
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component'

//Routes
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', component: HomeComponent}
];

//decorator
@NgModule({
    imports: [NgModule, BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent]
})

export class AppModule {

}