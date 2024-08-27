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
    {
      name: 'Softtek',
      description: '• BBVA: Led the design and implementation of a serverless cloud system to manage internal business trips, utilized by over 50,000 employees, using React.js and Node.js. Digital FEMSA: Designed a micro- frontend architecture for the FINTECH SPIN, completing the project 3 months ahead of schedule with 80 % test coverage.Implemented registration, login, and promotions systems for SPIN PREMIA NEGOCIOS, facilitating the growth of 36.6 million users using React Native and SCRUM. Aeroméxico: Technical lead for a team of 10 in the refactoring of a legacy application, eliminating over 700 errors and improving performance by 40 %.Optimized maintainability and scalability by applying modern design patterns, ensuring code quality for monthly operations exceeding 250 billion MXN. Interviewed and selected candidates for 4 international projects, ensuring alignment of skills with project objectives.',
      stack: ['Angular', 'NodeJS'],
      image: 'showcase/softtek-white.png',
      portfolio_images: [],
      dark: true,
      url: 'https://www.softtek.com/'
    },
    {
      name: 'Duelazo',
      description: '• Managed and led a development team of 9 developers and 2 designers, collaborating directly with the CEO and Marketing to align the technology strategy with the business objectives of a startup that now has over 80,000 downloads, 4.6 stars on the App Store, and 4 on Play Store. Redesigned a comprehensive software architecture using AWS, Flutter, Python, C#, and React, successfully developing and launching a CMS, Android app, iOS app, MacOS and Windows admin tools, reducing operational costs by more than 70%. Refactored a React and Laravel application, mitigating over 1,000 errors and enabling remote operation and successful launch of a Sports Pool application for Android and iOS. Interviewed candidates and built a high- performance team for project development and launch, ensuring skills were aligned with the clients desired timeline and budget.',
      stack: ['React', 'MongoDB'],
      image: 'showcase/duelazo-shadow.png',
      portfolio_images: [],
      dark: true,
      url: 'https://duelazo.com/'
    },];
  jobs = [
    {
      name: 'Softtek',
      description: '• BBVA: Led the design and implementation of a serverless cloud system to manage internal business trips, utilized by over 50,000 employees, using React.js and Node.js. Digital FEMSA: Designed a micro- frontend architecture for the FINTECH SPIN, completing the project 3 months ahead of schedule with 80 % test coverage.Implemented registration, login, and promotions systems for SPIN PREMIA NEGOCIOS, facilitating the growth of 36.6 million users using React Native and SCRUM. Aeroméxico: Technical lead for a team of 10 in the refactoring of a legacy application, eliminating over 700 errors and improving performance by 40 %.Optimized maintainability and scalability by applying modern design patterns, ensuring code quality for monthly operations exceeding 250 billion MXN. Interviewed and selected candidates for 4 international projects, ensuring alignment of skills with project objectives.',
      stack: ['Angular', 'NodeJS'],
      image: 'showcase/softtek.png',
      portfolio_images: [],
      dark: false,
      url: 'https://www.softtek.com/'
    },
    {
      name: 'BBVA',
      description: ' Led the design and implementation of a serverless cloud system to manage internal business trips, utilized by over 50,000 employees, using React.js and Node.js.',
      stack: ['React', 'MongoDB'],
      image: 'showcase/bbva.png',
      portfolio_images: [],
      dark: false,
      url: 'https://www.bbva.com/es/mx/'
    },
    {
      name: 'DigitalFEMSA',
      description: 'Designed a micro-frontend architecture for the FINTECH SPIN, completing the project 3 months ahead of schedule with 80% test coverage. Implemented registration, login, and promotions systems for SPIN PREMIA NEGOCIOS, facilitating the growth of 36.6 million users using React Native and SCRUM.', stack: ['React', 'MongoDB'], image: 'showcase/femsa.png', portfolio_images: [], dark: false,
      url: 'https://spinpremianegocios.com/'

    },
    {
      name: 'Aeroméxico',
      description: 'Technical lead for a team of 10 in the refactoring of a legacy application, eliminating over 700 errors and improving performance by 40%. Optimized maintainability and scalability by applying modern design patterns, ensuring code quality for monthly operations exceeding 250 billion MXN.',
      stack: ['React', 'MongoDB'],
      image: 'showcase/aeromexico.png',
      portfolio_images: [],
      dark: false,
      url: 'https://aeromexico.com/'
    },
    {
      name: 'Duelazo',
      description: '• Managed and led a development team of 9 developers and 2 designers, collaborating directly with the CEO and Marketing to align the technology strategy with the business objectives of a startup that now has over 80,000 downloads, 4.6 stars on the App Store, and 4 on Play Store. Redesigned a comprehensive software architecture using AWS, Flutter, Python, C#, and React, successfully developing and launching a CMS, Android app, iOS app, MacOS and Windows admin tools, reducing operational costs by more than 70%. Refactored a React and Laravel application, mitigating over 1,000 errors and enabling remote operation and successful launch of a Sports Pool application for Android and iOS. Interviewed candidates and built a high- performance team for project development and launch, ensuring skills were aligned with the clients desired timeline and budget.',
      stack: ['React', 'MongoDB'],
      image: 'showcase/duelazo-shadow.png',
      portfolio_images: [],
      dark: false,
      url: 'https://duelazo.com/'
    },
  ];
  projects = [
    {
      name: 'Spirals',
      description: 'Cree una aplicación para Android/iOS para la visualización de mi libro.',
      stack: ['Flutter', 'NestJS', 'AWS Lambda', 'MongoDB'],
      image: 'showcase/spirals.png',
      portfolio_images: [],
      dark: false,
      url: 'https://spiraldimensions.com/'
    },
    {
      name: 'Dimensions: Spiral 1',
      description: 'Escribí un libro',
      stack: ['Kindle'],
      image: 'showcase/spirals.png',
      portfolio_images: [],
      dark: false,
      url: 'https://spiraldimensions.com/'
    },
    {
      name: 'The Pack',
      description: 'Desarrolle y lancé una aplicación para Android/iOS así como un administrador web. Esta aplicación te permite encontrar todo para tu mascota cerca de ti así como la fase dos se construyo como una red social.',
      stack: ['Flutter', 'MongoDB', 'EC2', 'Lambda', 'NodeJS', 'Tensorflow', 'Elasticsearch'],
      image: 'showcase/thepack.png',
      portfolio_images: [],
      dark: false,
      url: 'https://thepackapp.io'
    },
    {
      name: 'Ecolife',
      description: 'Desarrolle y lancé una aplicación para Android/iOS. Esta aplicación era una guía para que las personas sean más ecológicas. Landing page ',
      stack: ['C#', 'Unity', 'React', 'Firebase'],
      image: 'showcase/ecolife.png',
      portfolio_images: [],
      dark: false,
      url: 'https://ecolife.com'
    },
    {
      name: 'Condomind',
      description: 'For my graduation project, I successfully developed and implemented the only monetizable project, a condominium management system and social network for condo residents, in 2 of the most exclusive condominium complexes in Mexico City, with over 200 residents and a monthly subscription of $30 MXN per person.',
      stack: ['React Native', 'MySQL', 'Django', 'Python', 'Javascript', 'Typescript'],
      image: 'showcase/condomind.png',
      portfolio_images: [],
      dark: false,
      url: 'https://condomind.com'
    },
    {
      name: 'Cest La Vie',
      description: 'Another company',
      stack: ['Youtube', 'Tiktok'],
      image: 'showcase/cest_la_vie.png',
      portfolio_images: [],
      dark: false,
      url: 'https://www.youtube.com/watch?v=eve65sXCnWs&t=36s'
    },

  ];
  selectedProject: any = null;

  openPopup(project: any) {
    this.selectedProject = project;
  }

  closePopup() {
    this.selectedProject = null;
  }
}
