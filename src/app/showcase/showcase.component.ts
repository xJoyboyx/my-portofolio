import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPopupComponent } from '../project-popup/project-popup.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule, ProjectPopupComponent],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {
  items = [
    { name: 'Softtek', description: 'Company I worked for', stack: ['Angular', 'NodeJS'], image: 'showcase/softtek-white.png', portfolio_images: ['path/to/portfolio_image1.jpg'], dark: true },
    { name: 'Duelazo', description: 'Another company', stack: ['React', 'MongoDB'], image: 'showcase/duelazo.png', portfolio_images: ['path/to/portfolio_image2.jpg'], dark: true }
  ];
  jobs = [
    { name: 'Softtek', description: 'Company I worked for', stack: ['Angular', 'NodeJS'], image: 'showcase/softtek.png', portfolio_images: ['path/to/portfolio_image1.jpg'], dark: true },
    { name: 'BBVA', description: 'Another company', stack: ['React', 'MongoDB'], image: 'showcase/bbva.png', portfolio_images: ['path/to/portfolio_image2.jpg'], dark: true },
    { name: 'DigitalFEMSA', description: 'Another company', stack: ['React', 'MongoDB'], image: 'showcase/femsa.png', portfolio_images: ['path/to/portfolio_image2.jpg'], dark: true },
    { name: 'Aeroméxico', description: 'Another company', stack: ['React', 'MongoDB'], image: 'showcase/aeromexico.png', portfolio_images: ['path/to/portfolio_image2.jpg'], dark: true },
    { name: 'Duelazo', description: 'Another company', stack: ['React', 'MongoDB'], image: 'showcase/duelazo-shadow.png', portfolio_images: ['path/to/portfolio_image2.jpg'], dark: true },
  ];
  projects = [
    { name: 'Spirals', description: 'Company I worked for', stack: ['Angular', 'NodeJS'], image: 'showcase/spirals.png', portfolio_images: ['path/to/portfolio_image1.jpg'], dark: true },
    { name: 'Dimensions', description: 'Another company', stack: ['React', 'MongoDB'], image: 'showcase/dimensions.png', portfolio_images: ['path/to/portfolio_image2.jpg'], dark: true },
    { name: 'ThePack', description: 'Another company', stack: ['React', 'MongoDB'], image: 'showcase/thepack.png', portfolio_images: ['path/to/portfolio_image2.jpg'], dark: true },
    { name: 'Ecolife', description: 'Another company', stack: ['React', 'MongoDB'], image: 'showcase/ecolife.png', portfolio_images: ['path/to/portfolio_image2.jpg'], dark: true },
    { name: 'Condomind', description: 'Another company', stack: ['React', 'MongoDB'], image: 'showcase/condomind.png', portfolio_images: ['path/to/portfolio_image2.jpg'], dark: true },
    { name: 'Cest La Vie', description: 'Another company', stack: ['React', 'MongoDB'], image: 'showcase/cest_la_vie.png', portfolio_images: ['path/to/portfolio_image2.jpg'], dark: true },

  ];
  selectedProject: any = null;

  openPopup(project: any) {
    this.selectedProject = project;
  }

  closePopup() {
    this.selectedProject = null;
  }
}
