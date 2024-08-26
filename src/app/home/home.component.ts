import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { LandingComponent } from '../landing/landing.component';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { ContactLinksComponent } from '../contact-links/contact-links.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingComponent, AboutMeComponent, ShowcaseComponent, ContactLinksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
