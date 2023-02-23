import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario:UsuarioModel;

  constructor(public router:Router, public auth:AuthService) { 
    this.usuario=new UsuarioModel;
  }

  ngOnInit(): void {
  }


  login():void{
    console.log(this.usuario)
    if(this.usuario.username==null || this.usuario.password==null){
      Swal.fire('Error de Inicio','Username o Password Vacias!!!','error');
      return;
    }
    this.auth.login(this.usuario).subscribe(response=>{
      this.auth.guardarUsuario(response.access_token);
      this.auth.guardarToken(response.access_token);
      this.router.navigate(['home']);
      Swal.fire('Login', `Hola ${this.usuario.username}, has iniciado sesión con éxito!`, 'success');
    });   
    
   
  }

}
