//JIT (Just In Time) compiler
//this is the default setup for JIT compilation
//TODO: read about JIT and AOT(Ahead of Time)

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule}              from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);