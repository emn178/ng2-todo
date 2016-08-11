require('./assets/stylesheets/application.scss');

// The usual bootstrapping imports
import { enableProdMode } from '@angular/core';

if (__NODE_ENV__ == 'production') {
  enableProdMode();
}

import { AppModule } from './app';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);
