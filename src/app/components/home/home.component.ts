import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardsComponent } from '../cards/cards.component';
import { SliderComponent } from '../slider/slider.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    CardsComponent,
    SliderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
