import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class CarouselComponent implements OnInit {
 items = [
  { title: 'Item 1', imageUrl: 'https://via.placeholder.com/1792x1024' },
  { title: 'Item 2', imageUrl: 'https://via.placeholder.com/1792x1024' },
  { title: 'Item 3', imageUrl: 'https://via.placeholder.com/1792x1024' },
  { title: 'Item 4', imageUrl: 'https://via.placeholder.com/1792x1024' },
  { title: 'Item 5', imageUrl: 'https://via.placeholder.com/1792x1024' },
  { title: 'Item 6', imageUrl: 'https://via.placeholder.com/1792x1024' },
  { title: 'Item 7', imageUrl: 'https://via.placeholder.com/1792x1024' },
];


  carousels = [
    { currentIndex: 0, itemWidth: 210, itemsPerPage: 6 },
    { currentIndex: 0, itemWidth: 210, itemsPerPage: 6 },
    { currentIndex: 0, itemWidth: 210, itemsPerPage: 6 }
  ];

  ngOnInit() {
    // Debugging log to make sure items are initialized
    console.log(this.items);
  }

  scrollLeft(index: number) {
    if (this.carousels[index].currentIndex > 0) {
      this.carousels[index].currentIndex--;
    } else {
      this.carousels[index].currentIndex = Math.ceil(this.items.length / this.carousels[index].itemsPerPage) - 1;
    }
  }

  scrollRight(index: number) {
    if (this.carousels[index].currentIndex < Math.ceil(this.items.length / this.carousels[index].itemsPerPage) - 1) {
      this.carousels[index].currentIndex++;
    } else {
      this.carousels[index].currentIndex = 0;
    }
  }

  onScroll(event: any, index: number) {
    const scrollPosition = event.target.scrollLeft;
    this.carousels[index].currentIndex = Math.floor(scrollPosition / (this.carousels[index].itemWidth * this.carousels[index].itemsPerPage));
  }
}
