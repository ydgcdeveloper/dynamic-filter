import { logOut } from './../../store/data/data.actions';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.getAuthorizationToken();
    let authReq = req.clone();

      authReq = req.clone({
        headers: req.headers
          .set('Authorization', 'Bearer ' + authToken)
      });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && error.error.message === 'Invalid credentials') {
          this.store.dispatch(logOut());
          this.router.navigateByUrl('login', { replaceUrl: true });
        } else {
          console.log('Error aqui -->> ', error);
        }
        return throwError(error);
      })
    );
  }
}
