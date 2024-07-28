import { Component } from '@angular/core';
import { SliderAtomComponent } from '../slider-atom/slider-atom.component';

@Component({
  selector: 'slider',
  standalone: true,
  imports: [SliderAtomComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

}
