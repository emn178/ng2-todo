// Polyfills
import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');

if (__NODE_ENV__ == 'development') {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
