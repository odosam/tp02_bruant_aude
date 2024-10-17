import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecapComponent } from './recap/recap.component';

@Component({
  selector: 'app-root',
  standalone : true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,CompteComponent, FooterComponent,HeaderComponent,RecapComponent],
})

export class AppComponent {
  title = 'tp02_bruant_aude';
}
