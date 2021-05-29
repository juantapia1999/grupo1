import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UsuariosService, private router: Router) { }

  canActivate() {
    if (this.userService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['usuarios/ingresar']);
    return false;
  }

}
