import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-popup',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de incluir CommonModule aquí
  templateUrl: './project-popup.component.html',
  styleUrls: ['./project-popup.component.scss']
})
export class ProjectPopupComponent {
  @Input() project: any; // Recibe el proyecto seleccionado
  @Output() close = new EventEmitter<void>(); // Emite un evento al cerrar el popup

  onClose() {
    this.close.emit(); // Emite el evento close cuando se cierra el popup
  }
}
