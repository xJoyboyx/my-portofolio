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
      description: 'Led design and implementation of a serverless cloud system for internal business trips (50,000+ employees). Designed micro-frontend architecture for FINTECH SPIN PREMIA NEGOCIOS, achieving 80% test coverage and facilitating growth of 36.6M users. Technical lead for a team in refactoring, improving performance by 40%.',
      stack: ['React Native','React', 'NodeJS', 'AWS', 'Jest', 'Jenkins', 'React Native Camera', 'MRZ Scanner','Apple Wallet', 'Microfrontend','Google Wallet'],
      image: 'showcase/softtek.png',
      portfolio_images: [],
      dark: false,
      url: 'https://www.softtek.com/'
    },
    {
      name: 'Duelazo',
      description: 'Managed a team of 9 developers and 2 designers to align technology strategy with business goals. Redesigned architecture using AWS, Flutter, Django, C#, and React, cutting operational costs by 70%. Refactored app, reducing 1,000 errors and launching a Sports Pool app for Android/iOS.',
      stack: ['React', 'AWS', 'Flutter', 'Django', 'Python', 'PHP', 'Lambdas', 'CloudFront', 'Route53', 'EC2', 'DynamoDB', 'Route53', 'MRZ Scanner'],
      image: 'showcase/duelazo-shadow.png',
      portfolio_images: [],
      dark: false,
      url: 'https://duelazo.com/'
    },
    {
      name: 'Aeroméxico',
      description: 'Led a team of 10 to refactor a legacy application, eliminating 700+ errors and improving performance by 40%. Applied modern design patterns for maintainability and scalability, ensuring code quality for monthly operations exceeding 250 billion MXN.',
      stack: ['React Native', 'Javascript','Typescript','Jenkins', 'AWS Code Pipeline', 'Jest', 'React Native Camera', 'MRZ Scanner','Apple Wallet', 'Google Wallet'],
      image: 'showcase/aeromexico.png',
      portfolio_images: [],
      dark: false,
      url: 'https://aeromexico.com/'
    },
    {
      name: 'BBVA',
      description: 'Designed and implemented a serverless cloud system for internal business trips (50,000+ employees), using React.js and Node.js.',
      stack: ['React Native', 'Javascript','Typescript','Jenkins', 'AWS Code Pipeline', 'Jest'],
      image: 'showcase/bbva.png',
      portfolio_images: [],
      dark: false,
      url: 'https://www.bbva.com/es/mx/'
    },
    {
      name: 'Digital FEMSA',
      description: 'Designed a micro-frontend architecture for FINTECH SPIN, completed 3 months ahead of schedule with 80% test coverage. Implemented systems for SPIN PREMIA NEGOCIOS, facilitating 36.6M user growth using React Native and SCRUM.',
      stack: ['React Native', 'Microfrontend', 'Fintech', 'Jest', 'Jenkins', 'Githooks', 'Husky', 'Transaction Encryption'],
      image: 'showcase/femsa.png',
      portfolio_images: [],
      dark: false,
      url: 'https://spinpremianegocios.com/'
    }
  ];

  projects = [
    {
      name: 'MAI Store',
      description: 'As a certified prompt engineer, I built a web app that lets users copy and paste the best AI prompts. Users can fine-tune the parameters to get the most out of AI-generated responses.',
      stack: ['NextJS', 'AWS', 'EC2', 'MongoDB', 'Cloudfront', 'Tailwind', 'Jest', 'Express', 'i18n', 'PayloadCMS', 'Google Analytics', 'Facebook Pixel' ],
      image: 'showcase/MAI.png',
      portfolio_images: [],
      dark: false,
      url: 'https://maistore.io'
    },
    {
      name: 'Dimensions: Spiral 1',
      description: 'I wrote a book and developed an app available on iOS and Android, so everyone can read it. I also handled the publishing on Kindle.',
      stack: ['Flutter', 'Kindle', 'AWS', 'Route53', 'Angular', 'SpringBoot3', 'PM2', 'MongoDB', 'EC2', 'Lambda', 'i18n', 'SCSS', 'JUnit', 'CMS'],
      image: 'showcase/spirals.png',
      portfolio_images: [],
      dark: false,
      url: 'https://spiraldimensions.com/'
    },
    {
      name: 'The Pack',
      description: 'I developed and launched an Android/iOS app along with a web admin tool. The app helps users find pet-friendly locations nearby, and the second phase evolved into a social network for pet owners.',
      stack: ['Flutter', 'MongoDB', 'EC2', 'Lambda',  'Google Analytics', 'Facebook Pixel', 'NodeJS', 'Express','i18n', 'Cloudfront', 'Cloudformation', 'CMS', 'Githooks','Husky', 'Clickup'],
      image: 'showcase/thepack.png',
      portfolio_images: [],
      dark: false,
      url: 'https://thepackapp.io'
    },
    {
      name: 'Condomind',
      description: 'For my graduation project, I developed and implemented the only monetizable project: a condominium management system and social network for residents in two exclusive complexes in Mexico City, with over 200 residents subscribing at $30 MXN per month.',
      stack: ['React Native', 'MySQL', 'Django', 'Python', 'Javascript', 'Typescript','Githooks','Husky', 'Clickup','Angular'],
      image: 'showcase/condomind.png',
      portfolio_images: [],
      dark: false,
      url: 'https://condomind.com'
    },
    {
      name: 'Ecolife',
      description: 'I developed and launched an Android/iOS app. This app serves as a guide to help people adopt more eco-friendly habits, using gamification techniques.',
      stack: ['.Net','C#', 'Unity', 'React', 'Firebase','Githooks', 'Clickup', 'Gamification'],
      image: 'showcase/ecolife.png',
      portfolio_images: [],
      dark: false,
      url: 'https://ecolife.com'
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
