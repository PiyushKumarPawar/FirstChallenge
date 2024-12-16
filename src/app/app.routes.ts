import { Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        'path': '',
        component:CarouselComponent
    },
    {
        'path': 'home',
        component:HomeComponent
    }
];
