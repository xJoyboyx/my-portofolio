import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Route[] = [
    { path: '', component: HomeComponent },  // HomeComponent como la ruta principal
];
