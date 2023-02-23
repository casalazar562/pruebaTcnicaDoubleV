import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{

  @Input() usuario: UsuarioModel; //actualizar

  @Output() store: EventEmitter<UsuarioModel> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  formUsuario!: FormGroup;
  confirmC: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.usuario = {
      id_user:0,
      created_date:"",
      password:"",
      status:0,
      username:""
    };
    this.buildForm();


  }

  ngOnInit(): void {
    this.setProceso();
  }

  

  setProceso() {
    if (this.usuario) {
      this.formUsuario.patchValue({
        // email: this.usuario.user.email,
        // contrasena: this.usuario.contrasena,
        // nombre1: this.usuario.user.persona.nombre1,
        // nombre2: this.usuario.user.persona.nombre2,
        // apellido1: this.usuario.user.persona.apellido1,
        // apellido2: this.usuario.user.persona.apellido2,
        // fechaNac: this.usuario.user.persona.fechaNac,
        // celular: parseInt(this.usuario.user.persona.celular),
        // email: this.usuario.user.persona.email
      });
      // this.formUsuario.controls["contrasena"].disable();
    }
  }

  private buildForm() {
    this.formUsuario = this.formBuilder.group({
      id: [0],
      tipoIdentificacion: [null, [Validators.required]],
      identificacion: ["", [Validators.required]],
      email: ["", [Validators.required]],
      contrasena: ["", [Validators.required]],
      confirmContrasena: ["", [Validators.required]],     
      names: ["", [Validators.required]],
      lastNames: ["", [Validators.required]],
      username: ["", [Validators.required]],
      
    });

    this.formUsuario.valueChanges
      .pipe(debounceTime(350))
      .subscribe((data) => {});
  }

  guardarUsuario() {
    console.log('entro');
    var contrasena= this.getControl("contrasena").value;
    var contrasenaConfirm =this.getControl("confirmContrasena").value;
    if (contrasena == contrasenaConfirm) {
      this.store.emit(this.getUsuario());
    } else {
      console.log('no coinciden')
      // this._uiNotificationService.error("Las contraseñas no coinciden");
    }
  }

  closeModal() {
    this.cancel.emit();
  }

  private getControl(name: string) {
    return this.formUsuario.controls[name];
  }

  getUsuario() {
    return {
      id: this.usuario?.id_user,
      names: this.getControl("names").value.toUpperCase(),
      last_names: this.getControl("lastNames").value.toUpperCase(),      
      identification: this.getControl("identificacion").value,    
      email: this.getControl("email").value,
      TypoId: this.getControl("tipoIdentificacion").value,
      names_column:this.getControl("names").value.toUpperCase()+" "+this.getControl("lastNames").value.toUpperCase(),
      identification_column:this.getControl("tipoIdentificacion").value+" "+this.getControl("identificacion").value,
      userDTO:{
        username: this.getControl("username").value, 
        password: this.getControl("contrasena").value,
        status:1  
      }
     
    };
  }

  get idtipoIdentificacionField() {
    return this.formUsuario.get("tipoIdentificacion");
  }
  get identificacionField() {
    return this.formUsuario.get("identificacion");
  }
  get emailField() {
    return this.formUsuario.get("email");
  }

  get contrasenaField() {
    return this.formUsuario.get("contrasena");
  }
  get namesField() {
    return this.formUsuario.get("names");
  }
 
  get lastNamesField() {
    return this.formUsuario.get("lastNames");
  }
  get usernameField() {
    return this.formUsuario.get("username");
  }
  
 
}
