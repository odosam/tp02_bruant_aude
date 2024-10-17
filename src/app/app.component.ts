import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompteComponent } from './compte/compte.component';

@Component({
  selector: 'app-root',
  standalone : true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,CompteComponent],
})

export class AppComponent {
  title = 'tp02_bruant_aude';
}
