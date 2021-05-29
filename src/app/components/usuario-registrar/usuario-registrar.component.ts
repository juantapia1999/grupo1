import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuario-registrar',
  templateUrl: './usuario-registrar.component.html',
  styleUrls: ['./usuario-registrar.component.css']
})
export class UsuarioRegistrarComponent implements OnInit {

  user = { nombre: "", email: "", password: "", repassword: "" };
  reintentar: boolean = false;
  mensaje: string = "";
  exitoso: boolean = false;

  constructor(private userService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
  }

  registrar() {
    this.userService.registrar(this.user).subscribe(
      res => {
        let result: any = res;
        //console.log("res -> ", res);
        console.log("result ->", result.message);
        this.exitoso = true;
      },
      err => {
        //console.log("err -> ", err);
        console.log("message -> ", err.error.message);
        this.reintentar = true;
        this.mensaje = err.error.message;
      }
    );
    console.log("Sign Up");
  }

  recargarForm() {
    this.reintentar = false;
    this.exitoso=false;
    this.user.nombre = "";
    this.user.email = "";
    this.user.repassword = "";
    this.user.password = "";
    this.mensaje = "";
  }
}
