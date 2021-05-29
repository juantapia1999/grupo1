import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuarioModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient, private router:Router) { }

  listarUsuarios() {
    //para expandir/especializar las variables usamos ` y no ' o "
    //Las variables salen pintadas de otro color diferente del de texto
    return this.http.get(`${environment.API_URL}/user/list`);
    //si no funciona usar 
    //return this.http.get(this.API_URI+'/list');
  }

  buscarUsuario(id: string) {
    return this.http.get(`${environment.API_URL}/user/find/${id}`);
  }

  guardarUsuario(usuario: Usuario) {
    return this.http.post(`${environment.API_URL}/user/create`, usuario);
  }

  eleminarUsuario(id: string) {
    return this.http.delete(`${environment.API_URL}/user/delete/${id}`);
  }

  actualizarUsuario(id: string, actualizaUsuario: Usuario): Observable<Usuario> {
    return this.http.put(`${environment.API_URL}/user/update/${id}`, actualizaUsuario);
  }

  ingresar(usuario:any){
		return this.http.post(`${environment.API_URL}/user/signin`,usuario);
	}

	registrar(usuario:any){
		return this.http.post(`${environment.API_URL}/user/signup`,usuario);
	}

  isLoggedIn():Boolean{
		return !!localStorage.getItem('token'); //Si existe token retorna true
		//es el equivalente de testearlo con if pero ahora en una sola linea.
	}

  logOut(){
		localStorage.removeItem('token');
		this.router.navigate(['usuarios/principal']);
	}

  getToken(){//Obtenemos el token que despues enviara el interceptor x cada req
		return localStorage.getItem('token');
	}
}
