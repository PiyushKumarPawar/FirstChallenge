import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports:[RouterModule, 
     CarouselModule,
     CommonModule
     ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true
})
export class HomeComponent implements AfterViewInit {
  
  @ViewChild('videoPlayer') videoPlayer: any;  // Reference to the video player
  currentIndex: number = 0;
  videoList: { src: string, text: string, description: string }[] = [
    { src: 'trailer1.mp4', text: 'Karaven', description: 'A thrilling adventure awaits!' },
    { src: 'trailer2.mp4', text: 'Bhool Bhuliyaa 2', description: 'A horror-comedy full of twists.' },
    { src: 'trailer3.mp4', text: 'Cocomelon', description: 'A fun-filled journey for kids!' }
  ];

  ngAfterViewInit() {
    if (this.videoPlayer) {
      // Play the first video once the component is initialized
      this.videoPlayer.nativeElement.play();
      // Initially show the caption
      this.toggleCaptionVisibility(true);

      // Add event listener to hide the caption when the video starts playing
      this.videoPlayer.nativeElement.addEventListener('play', () => {
        this.toggleCaptionVisibility(false);  // Hide the caption when video starts
      });

      // Add event listener to show the caption when the video is paused or reloaded
      this.videoPlayer.nativeElement.addEventListener('pause', () => {
        this.toggleCaptionVisibility(true);  // Show the caption when video pauses
      });
    }
  }

  // Toggle the visibility of the caption
  toggleCaptionVisibility(isVisible: boolean) {
    const caption = document.querySelector('.carousel-caption');
    if (caption) {
      const captionElement = caption as HTMLElement;  // Cast to HTMLElement
      captionElement.style.opacity = isVisible ? '1' : '0';
      captionElement.style.transition = 'opacity 0.5s ease';  // Smooth transition
    }
  }

  // Function to go to the next video
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.videoList.length;
    this.reloadVideo();
  }

  // Function to go to the previous video
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.videoList.length) % this.videoList.length;
    this.reloadVideo();
  }

  // Reload the video to reset it to the start
  reloadVideo() {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.load();  // Reload the video
      this.videoPlayer.nativeElement.play();  // Play the video after reload
      this.toggleCaptionVisibility(false);  // Hide caption when video starts playing
    }
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
