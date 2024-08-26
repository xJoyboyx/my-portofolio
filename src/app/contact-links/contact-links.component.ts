import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Asegúrate de importar esto

interface ContactLink {
  icon: string;  // URL o nombre del ícono
  label: string;  // Etiqueta del contacto
  link: string;  // URL o dirección de correo
}

@Component({
  selector: 'app-contact-links',
  standalone: true,  // Asegúrate de que sea standalone si decides usar la primera solución
  imports: [CommonModule],  // Añadir CommonModule aquí
  templateUrl: './contact-links.component.html',
  styleUrls: ['./contact-links.component.scss']
})
export class ContactLinksComponent {
  contactLinks: ContactLink[] = [
    { icon: 'icons/mail.png', label: 'email', link: 'mailto:diegouribevillalobos@gmail.com' },
    { icon: 'icons/github.png', label: 'github', link: 'https://github.com/xJoyboyx' },
    { icon: 'icons/medium.png', label: 'medium', link: 'https://medium.com/@mariachiloco' },
    { icon: 'icons/ig.png', label: 'instagram', link: 'https://instagram.com/diegouribevillalobos' },
    { icon: 'icons/linkedin.png', label: 'linkedin', link: 'https://linkedin.com/in/diego-uribe-villalobos-831a857a' },
  ];
}
