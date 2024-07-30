import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navBar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
Logo: string = "assets/images/LOGO.jpg"
}
