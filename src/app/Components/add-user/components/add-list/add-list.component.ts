import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent {
  @Input() usuarios: UsuarioModel[] = [];

  @Output() update: EventEmitter<UsuarioModel> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() create: EventEmitter<void> = new EventEmitter();
  @Output() asignation: EventEmitter<UsuarioModel> = new EventEmitter();
  @Output() change: EventEmitter<number> = new EventEmitter();
  @Output() changePass: EventEmitter<UsuarioModel> = new EventEmitter();

  numReg = 5;
  pageActual = 0;

  constructor() {}

  enviarNumeroRegistros(num: any) {
    if (isNaN(num)){
      this.numReg = num.target.value;
    } else {
      this.numReg = num;
    }
  }

  actualizar(usuario: UsuarioModel) {
    this.update.emit(usuario);
  }

  eliminar(idUsuario: number) {
    this.delete.emit(idUsuario);
  }

  cambiarEstado(idUsuario: number) {
    this.change.emit(idUsuario);
  }

  cambiarContrasena(usuario: UsuarioModel) {
    this.changePass.emit(usuario);
  }

  agregar() {
    this.create.emit();
  }

  asignar(usuario: UsuarioModel) {
    this.asignation.emit(usuario);
  }
}
