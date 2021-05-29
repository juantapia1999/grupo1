import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {

  usuarios: any=[];
  revelar:boolean=true;

  rol={
    admin: "admin",
    user: "user"
  }

  constructor(private userService: UsuariosService) { }

  ngOnInit(): void {
    this.userService.listarUsuarios().subscribe(
      res => {
        console.log('res -> ', res),
        this.usuarios = res
      },
      err => console.log('err -> ', err)
    );
  }

}
