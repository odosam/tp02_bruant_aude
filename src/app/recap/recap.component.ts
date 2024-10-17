import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recap',
  standalone: true,
  imports: [],
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.css'
})

export class RecapComponent {

  @Input() civilite= "";
  @Input() prenom = "";
  @Input() nom = "";
  @Input() telephone = "";
  @Input() adresse = "";
  @Input() codePostal= "";
  @Input() ville= "";
  @Input() pays= "";
  @Input() email= "";
  @Input() login= ""; 
  @Input() pwd= "";

}
