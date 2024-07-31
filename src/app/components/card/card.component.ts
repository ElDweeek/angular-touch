import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() Cards: Array<Card> = [];

}

interface Card {
  imgSrc: string,
  title: string,
  description: string
}
