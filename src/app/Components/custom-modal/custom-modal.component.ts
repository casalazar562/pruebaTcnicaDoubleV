import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit, OnDestroy {
  @ViewChild('myModal') public myModal: ModalDirective | undefined;
  private _show: Boolean = false;

  private subscriber: Subscription | undefined;

  @Input() size: '' | 'lg' | 'sm' | 'xl' = '';
  @Input() title: string | undefined;

  @Output() showChange: EventEmitter<boolean> = new EventEmitter();
  @Input()
  set show(val: boolean) {
    if (val == this._show) return;
    this._show = val;
    if (val) {
      this.openModalClase(false)
    } else {
      this.closeModal()
    }
  }

  @Output() onClose: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

  openModalClase(updateValue = true) {
    this.myModal?.show();
    if (!this.subscriber) {
      this.subscriber = this.myModal?.onHide.subscribe((response: { val: any; }) => {
        response.val
        this.onClose.emit();
        this.changeVisibility(false);
      });
    }
    if (updateValue) {
      this.changeVisibility(true)
    }
  }

  closeModal() {
    if (this.myModal) {
      this.myModal.hide();
    }
  }

  changeVisibility(value:boolean) {
    this._show = value
    this.showChange.emit(value)
  }

  get customClassSize() {
    switch (this.size) {
      case 'lg':
        return "modal-lg";
      case 'sm':
        return "modal-sm";
      case 'xl':
        return "modal-xl";
    }
    return ''
  }
}
