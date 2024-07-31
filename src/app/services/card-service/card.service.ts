import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }

  getCards(): Array<Card> {
    return [
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
      {
        imgSrc: "assets/images/Products.webp",
        title: "Product Ten",
        description: "Product Ten Product Ten Product Ten Product Ten"
      },
    ];
  }
}

export interface Card {
  imgSrc: string;
  title: string;
  description: string;
}

