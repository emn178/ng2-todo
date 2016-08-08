// Polyfills
import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');

if (ENV.NODE_ENV == 'development') {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
// RxJS
import 'rxjs';
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...

require("../node_modules/bootstrap/dist/css/bootstrap.css");
require("../node_modules/font-awesome/css/font-awesome.css");
