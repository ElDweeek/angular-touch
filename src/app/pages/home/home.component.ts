import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    CardsComponent,
    SliderComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
