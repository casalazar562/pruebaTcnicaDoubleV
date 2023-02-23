import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public traerUsuarios() {
    return this.http.get<UsuarioModel[]>("lista_usuarios");
  }


  public crearUsuario(usuario: UsuarioModel) {
    return this.http.post<UsuarioModel>("usuarios", usuario);
  }
}
