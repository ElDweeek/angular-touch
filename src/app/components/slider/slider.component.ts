import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  responsiveOptions: Array<BreakPoint> = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];  Categories: Array<Category> = [
    {
      src: "assets/images/accessories.webp",
      name: "Accessories"
    },
    {
      src: "assets/images/Phone.avif",
      name: "Smart Phones"
    },
    {
      src: "assets/images/fashion.webp",
      name: "Fashion"
    },
    {
      src: "assets/images/labtop.webp",
      name: "Labtops"
    },
    {
      src: "assets/images/monitors.webp",
      name: "Monitors"
    },
    {
      src: "assets/images/glasses.jpg",
      name: "Glasses"
    },
    {
      src: "assets/images/glasses.jpg",
      name: "Glasses"
    },
    {
      src: "assets/images/glasses.jpg",
      name: "Glasses"
    },
    {
      src: "assets/images/glasses.jpg",
      name: "Glasses"
    },
    {
      src: "assets/images/labtop.webp",
      name: "Labtops"
    },
    {
      src: "assets/images/labtop.webp",
      name: "Labtops"
    },
    {
      src: "assets/images/labtop.webp",
      name: "Labtops"
    },
    {
      src: "assets/images/labtop.webp",
      name: "Labtops"
    }
  ]
}
interface Category {
  src: string,
  name: string
}

interface BreakPoint  {
  breakpoint: string,
  numVisible: number,
  numScroll: number
}
