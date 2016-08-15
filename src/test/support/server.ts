import { Injectable } from '@angular/core';
import { XHRBackend, Response, ResponseOptions, RequestMethod, Headers } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

@Injectable()
export class Server {
  mockBackend: MockBackend;

  constructor(mockBackend: XHRBackend) {
    this.mockBackend = mockBackend as any as MockBackend;
  }

  request(method: RequestMethod, url: string|RegExp, body: any, code: number = 200, headers: Headers = undefined) {
    this.mockBackend.connections.subscribe(c => {
      if ((c.request.method as RequestMethod) != method) {
        return;
      }
      let matched = false;
      if (url instanceof RegExp) {
        matched = (url as RegExp).test(c.request.url);
      } else {
        matched = c.request.url == url;
      }
      if (!matched) {
        return;
      }

      c.mockRespond(new Response(new ResponseOptions({
        body: body,
        status: code,
        headers: headers
      })));
    });
    return new Promise((resolve) => {
      setTimeout(resolve);
    });
  }
  get(url: string|RegExp, body: any, code: number = 200, headers: Headers = undefined) {
    return this.request(RequestMethod.Get, url, body, code, headers);
  }
  post(url: string|RegExp, body: any, code: number = 200, headers: Headers = undefined) {
    return this.request(RequestMethod.Post, url, body, code, headers);
  }
  put(url: string|RegExp, body: any, code: number = 200, headers: Headers = undefined) {
    return this.request(RequestMethod.Put, url, body, code, headers);
  }
  patch(url: string|RegExp, body: any, code: number = 200, headers: Headers = undefined) {
    return this.request(RequestMethod.Patch, url, body, code, headers);
  }
  delete(url: string|RegExp, body: any, code: number = 200, headers: Headers = undefined) {
    return this.request(RequestMethod.Delete, url, body, code, headers);
  }
}
