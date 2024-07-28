import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cards',
  standalone: true,
  imports: [RouterOutlet,CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

}
