import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private userService:UsuariosService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const tokenizeReq=req.clone({
      setHeaders:{
        Authorization: `Baerer ${this.userService.getToken()}`,
      }
    })
    return next.handle(tokenizeReq);
  }
}
