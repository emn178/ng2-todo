import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DEFAULT_PROVIDERS } from './providers';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

export function setupComponent ({
  declarations = [], 
  providers = [], 
  routes = null
}) {
  beforeEach(() => {
    let imports: any[] = [BrowserModule, FormsModule];
    if (routes) {
      imports.push(RouterModule.forRoot(routes));
    }
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: [...DEFAULT_PROVIDERS, ...providers]
    });
  });
}
