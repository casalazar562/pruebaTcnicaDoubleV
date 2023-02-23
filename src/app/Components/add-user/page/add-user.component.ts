import { Component,OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public showModalUsuario = false;
  public showModalAsignacion = false;
  public showModalContrasena = false;

  usuario: UsuarioModel = {};
  usuarios: UsuarioModel[] = [];
  

  constructor(
    // private _uiNotificationService: UINotificationService,
    private _usuarioService: UserService,
    
  ) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this._usuarioService.traerUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
      },
      (error) => {
        // this._uiNotificationService.error("Error de conexión");
      }
    );
  }

 



  createUsuarios() {
    this.usuario = {};
    this.showModalUsuario = true;
  }
 
  guardarUsuarios(usuario: UsuarioModel) {
    
      this._usuarioService.crearUsuario(usuario).subscribe(
        (usuario) => {
          this.getUsuarios();
          this.reset();
        },
        (error) => {
          // this._uiNotificationService.error(
          //   "El email ya esta registrado en el sistema"
          // );
        }
      );
    
  }

  reset() {
    this.usuario = {};
    this.showModalUsuario = false;
  }
}
