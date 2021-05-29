import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuario-ingresar',
  templateUrl: './usuario-ingresar.component.html',
  styleUrls: ['./usuario-ingresar.component.css']
})
export class UsuarioIngresarComponent implements OnInit {

  user = { usuario: "", password: "" };
  reintentar: boolean = false;
  mensaje: string = "";

  constructor(private userService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
  }

  ingresar() {

    this.userService.ingresar(this.user).subscribe(
      res => {
        let result: any = res;
        //console.log("res -> ", res);
        localStorage.setItem('token',result.token);
        console.log("result -> ", result.message);
        this.router.navigate(['usuarios-principal']);
      },
      err => {
        //console.log("err -> ", err);
        console.log("message -> ", err.error.message);
        this.reintentar = true;
        this.mensaje = err.error.message;
      }
    )
    console.log("ingresar");
    console.log("usuario -> ", this.user)
  }

  recargarForm() {
    this.reintentar = false;
    this.user.usuario = "";
    this.user.password = "";
    this.mensaje = "";
  }

}
