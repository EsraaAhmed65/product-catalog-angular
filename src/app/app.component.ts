import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
// SVG Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faBagShopping = faBagShopping;
 }
