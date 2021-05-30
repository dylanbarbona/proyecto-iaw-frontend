import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpXsrfTokenExtractor, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {
  constructor(private tokenService: HttpXsrfTokenExtractor) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const headerName = 'X-XSRF-TOKEN';
      const lcUrl = req.url.toLowerCase();
      const token = sessionStorage.getItem('XSRF-TOKEN')
      if (token !== null && !req.headers.has(headerName))
          req = req.clone({ headers: req.headers.set(headerName, token) });
      return next.handle(req);
  }
}

export let HttpXSRFInterceptorProvider = { provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true };
