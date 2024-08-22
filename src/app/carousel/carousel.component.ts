import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides = [
    {
      image: 'https://www.webqlo.com/images/home-slider/main_banner_3.webp',
      title: 'Download Free Report<br>in 60 seconds',
      description: '',
      buttonLabel: 'Download Now'
    },
    {
      image: 'https://www.webqlo.com/images/home-slider/main_banner_2_desktop.png',
      title: 'Social Media Intelligence',
      description: 'Power your digital marketing effort with Adqlo, <br>our proprierty social media intelligence  platform',
      buttonLabel: 'Discover More'
    },
    {
      image: 'https://www.webqlo.com/images/home-slider/webqlo-slider-webqlorian.jpg',
      title: 'Meet the <br>#WEBQLORIANS',
      description: '',
      buttonLabel: 'Discover More'
    }
  ];
  currentIndex = 0;
  isMobile: boolean = window.innerWidth <= 1199;

  ngOnInit(): void {
    this.updateCarousel();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMobile = window.innerWidth <= 1199;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.slides.length - 1;
    this.updateCarousel();
  }

  next(): void {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? this.currentIndex + 1 : 0;
    this.updateCarousel();
  }

  updateCarousel(): void {
    const carouselWrapper = document.querySelector('.carousel-wrapper') as HTMLElement;
    if (carouselWrapper) {
      carouselWrapper.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
  }

  getImageStyle(index: number): { [key: string]: string } {
    switch (index) {
      case 0:
        return this.isMobile
          ? { 'max-width': '100%', 'height': 'auto', 'justify-content':'center' }
          : { 'max-width': '60%', 'height': '100%', 'margin-left': 'auto' }; // Align image to the right on desktop
      case 1:
        return { 'max-width': '100%', 'height': 'auto' };
      case 2:
        return { 'max-width': '90%', 'height': 'auto', 'margin-left':'5%' };
      default:
        return {};
    }
  }
}
