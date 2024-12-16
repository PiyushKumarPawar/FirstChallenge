import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';  // Import CarouselComponent
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],  // Ensure correct SCSS file extension
  standalone: true,  // Mark this as a standalone component
  imports: [RouterModule]  // Import CarouselComponent here
})
export class AppComponent {
  title = 'my-angular-app';
}
