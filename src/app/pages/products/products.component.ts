import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {  CardService } from '../../services/card-service/card.service';
import { Card } from '../../interfaces/card.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  Cards: Array<Card> = [];

  constructor(private x : CardService) {};

  ngOnInit(): void {
    this.Cards = this.x.getCards();
  }
}
