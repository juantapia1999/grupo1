import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuarioIngresarComponent } from './components/usuario-ingresar/usuario-ingresar.component';
import { UsuarioListarComponent } from './components/usuario-listar/usuario-listar.component';
import { UsuarioRegistrarComponent } from './components/usuario-registrar/usuario-registrar.component';
import { UsuariosHomeComponent } from './components/usuarios-home/usuarios-home.component';
import { UsuariosPrincipalComponent } from './components/usuarios-principal/usuarios-principal.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: UsuariosPrincipalComponent },
  { path: 'usuarios/listar', component: UsuarioListarComponent, canActivate: [AuthGuard] },
  { path: 'usuarios/ingresar', component: UsuarioIngresarComponent },
  { path: 'usuarios/registrar', component: UsuarioRegistrarComponent },
  { path: 'usuarios/principal', component: UsuariosPrincipalComponent },
  { path: 'usuarios/home', component: UsuariosHomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
