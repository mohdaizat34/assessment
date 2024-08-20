import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides = [
    {
      image: 'https://www.webqlo.com/images/home-slider/main_banner_3.webp',
      title: 'Download Free Report in 60 seconds',
      description: 'Power your digital marketing effort with Adqlo, our proprietary social media intelligence platform.',
      buttonLabel: 'Learn More'
    },
    {
      image: 'https://www.webqlo.com/images/home-slider/main_banner_2_desktop.png',
      title: 'Innovative Solutions',
      description: 'Explore our cutting-edge solutions designed to boost your business.',
      buttonLabel: 'Discover'
    },
    {
      image: 'https://www.webqlo.com/images/home-slider/webqlo-slider-webqlorian.jpg',
      title: 'Advanced Analytics',
      description: 'Leverage advanced analytics to gain insights and drive success.',
      buttonLabel: 'Get Started'
    }
  ];
  currentIndex = 0;

  ngOnInit(): void {
    this.updateCarousel();
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
        return { 'max-width': '60%', 'height': 'auto' };
      case 1:
        return { 'max-width': '100%', 'height': 'auto' };
      case 2:
        return { 'max-width': '90%', 'height': 'auto' };
      default:
        return {};
    }
  }
}
