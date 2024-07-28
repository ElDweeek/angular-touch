import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'slider-atom',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './slider-atom.component.html',
  styleUrl: './slider-atom.component.css'
})
export class SliderAtomComponent {

}
