import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardService } from '../../services/card-service/card.service';
import { Card } from '../../interfaces/card.interface';

@Component({
  selector: 'cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{

  Cards: Array<Card> = [];

  constructor(private x : CardService){};
  ngOnInit(): void {
    this.Cards = this.x.getCards();
  }
}
