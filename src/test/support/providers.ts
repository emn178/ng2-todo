import { APP_BASE_HREF } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// The usual bootstrapping imports
import { HTTP_PROVIDERS } from '@angular/http';
import { routing } from '../../app';
import { Server } from './server';

class Mock {
  createUrlTree() {
  }
}

export var DEFAULT_PROVIDERS = [
  routing.providers,
  { provide: APP_BASE_HREF, useValue: '/' },
  { provide: ActivatedRoute, useClass: Mock },
  { provide: Router, useClass: Mock },
  HTTP_PROVIDERS,
  { provide: XHRBackend, useClass: MockBackend },
  { provide: Server, useClass: Server }
];
