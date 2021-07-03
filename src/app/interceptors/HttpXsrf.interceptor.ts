import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpXsrfTokenExtractor, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {
  constructor(private tokenService: HttpXsrfTokenExtractor) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const headerName = 'X-XSRF-TOKEN';
      const cookieName = 'XSRF-TOKEN'
      const token = this.getCookie(cookieName)
      if (token !== null && !req.headers.has(headerName))
          req = req.clone({ headers: req.headers.set(headerName, token || 'NONE') });
      return next.handle(req);
  }

  private getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.pop()?.split(';').shift();
  }
}

export let HttpXSRFInterceptorProvider = { provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true };
