//importing modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import './components/rxjs.service';

//components
import {AppComponent} from './app.component';
import {AppRoutingModule, RoutableComponents} from './app-routing.module';

//services
import {SharedService} from './components/shared.service';

//pipes
import {TruncatePipe} from './components/pipes';

//decorator
@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
    declarations: [AppComponent, TruncatePipe, RoutableComponents],
    bootstrap: [AppComponent],
    providers: [SharedService]
})

export class AppModule {

}