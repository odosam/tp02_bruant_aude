import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compte',
  standalone : true,
  imports:[FormsModule],
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})

export class CompteComponent{

    Compte = {
    prenom: '',
    telephone: '',
    adresse: '',
    codePostal: '',
    ville: '',
    email: '',
    login: '', 
    pwd: '',
    pays: '',
    civilite: '',
  
  }

  onSubmit(){
    
  }
}

