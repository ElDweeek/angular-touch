import { Component } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  Cards: Array<Card> = [
    {
      imgSrc: "assets/images/Products.webp",
      title: "Product One",
      description: "Product One Product One Product One Product One"
    },
    {
      imgSrc: "assets/images/Products.webp",
      title: "Product Two",
      description: "Product Two Product Two Product Two Product Two"
    },
    {
      imgSrc: "assets/images/Products.webp",
      title: "Product Three",
      description: "Product Three Product Three Product Three Product Three"
    },
    {
      imgSrc: "assets/images/Products.webp",
      title: "Product Four",
      description: "Product Four Product Four Product Four Product Four"
    },
    {
      imgSrc: "assets/images/Products.webp",
      title: "Product Five",
      description: "Product Five Product Five Product Five Product Five"
    },
    {
      imgSrc: "assets/images/Products.webp",
      title: "Product Six",
      description: "Product Six Product Six Product Six Product Six"
    },
    {
      imgSrc: "assets/images/Products.webp",
      title: "Product Seven",
      description: "Product Seven Product Seven Product Seven Product Seven"
    },
    {
      imgSrc: "assets/images/Products.webp",
      title: "Product Eight",
      description: "Product Eight Product Eight Product Eight Product Eight"
    },
    {
      imgSrc: "assets/images/Products.webp",
      title: "Product Nine",
      description: "Product Nine Product Nine Product Nine Product Nine"
    },
  ]
}

interface Card {
  imgSrc: string,
  title: string,
  description: string
}
