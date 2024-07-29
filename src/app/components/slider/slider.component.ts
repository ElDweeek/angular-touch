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

  Categories: Array<Category> = [
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
    }
  ]
}
interface Category {
  src: string,
  name: string
}

