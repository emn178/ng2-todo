import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './shared';

// The usual bootstrapping imports
// import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }   from './app.component';
import { routing, declarations }   from './app.routes';
import { TodosComponent }   from './todos';

@NgModule({
    declarations: [AppComponent, ...declarations],
    imports:      [
      BrowserModule,
      FormsModule,
      routing
    ],
    providers: [
      HTTP_PROVIDERS,
      { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
      { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}
