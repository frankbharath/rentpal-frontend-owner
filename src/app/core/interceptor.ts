import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpXsrfTokenExtractor, HttpRequest, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
//import { CookieService } from 'angular2-cookie/services/cookies.service';


@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private tokenExtractor: HttpXsrfTokenExtractor){}
  
    // intercepts every request and adds withCredentials header, 
    // this will set the cookies of the rest api server
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const customReq = request.clone({
            withCredentials:true,
            setHeaders: { "X-XSRF-TOKEN": this.tokenExtractor.getToken() as string }
        });
        return next.handle(customReq).pipe(catchError(this.handleError));
    }

    handleError(error:HttpErrorResponse){
        // the user is not authenticated, show login page.
        if(error.status === 401){
            window.location.href="/login";
        }
        return throwError(error);
    }
}