import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public traerUsuarios() {
    return this.http.get<UsuarioModel[]>(environment.localhost+"/user/buscartodos");
  }


  public crearUsuario(usuario: UsuarioModel) {
    return this.http.post<UsuarioModel>(environment.localhost+"/user/guardar", usuario);
  }
}
