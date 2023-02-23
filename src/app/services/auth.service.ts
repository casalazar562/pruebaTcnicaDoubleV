
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UsuarioModel } from '../models/usuario';
import { Util } from '../util/util';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario!:UsuarioModel;
  private _token!:string;

  constructor(private http:HttpClient) { }

  public get usuario(): UsuarioModel {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
      return this._usuario;
    }
    return new UsuarioModel();
  }

  login(usuario: any): Observable<any> {
    
    const urlEndpoint= Util.authentication;
    const credenciales = window.btoa('angularapp' + ':' + '12345');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);
    console.log(params.toString());
    return this.http.post<any>(urlEndpoint, params.toString(), { headers: httpHeaders });
  }
  
  guardarUsuario(accesToken:string):void{
    let payload=this.obtenerDatosToken(accesToken);
    this._usuario=new UsuarioModel();
    this._usuario.username=payload.user_name;
    sessionStorage.setItem('usuario',JSON.stringify(this._usuario))
  }

  guardarToken(accessToken:string):void{
    let payload=this.obtenerDatosToken(accessToken);
    sessionStorage.setItem('token',payload);
  }


  
  obtenerDatosToken(token:string):any{
    if(token!=null){
      return JSON.parse(window.atob(token.split(".")[1]));
    }
    return null;
  }
  
}
