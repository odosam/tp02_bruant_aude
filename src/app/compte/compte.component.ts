import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RecapComponent } from '../recap/recap.component';


@Component({
  selector: 'app-compte',
  standalone : true,
  imports:[FormsModule, RecapComponent, CommonModule],
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})

export class CompteComponent{

  prenom = "";
  nom= "";
  telephone= "";
  adresse= "";
  codePostal= "";
  ville= "";
  email= "";
  login= ""; 
  pwd= "";
  pays= "";
  civilite= "";
  errorTxt="";
  IsDiplay: boolean = false;

  
  check() {

    if (this.prenom.length === 0) {
      this.errorTxt = "Veuillez saisir un prenom.";
      return
    }
    if (this.nom.length === 0) {
      this.errorTxt = "Veuillez saisir un nom.";
      return
    }
    if (this.telephone.length === 0) {
      this.errorTxt = "Veuillez saisir un numéro de téléphone.";
      return
    }
    if (this.adresse.length === 0) {
      this.errorTxt = "Veuillez saisir une adresse.";
      return
    }
    if (this.codePostal.length === 0) {
      this.errorTxt = "Veuillez saisir un code postal.";
      return
    }
    if (this.ville.length === 0) {
      this.errorTxt = "Veuillez saisir une ville.";
      return
    }
    if (this.email.length === 0) {
      this.errorTxt = "Veuillez saisir un email.";
      return
    }
    if (this.login.length === 0) {
      this.errorTxt = "Veuillez saisir un login.";
      return
    }
    if (this.pwd.length === 0) {
      this.errorTxt = "Veuillez saisir un mot de passe.";
      return
    }
    this.errorTxt = "";
    this.IsDiplay = true;
    
  }

  // onSubmit(){
  //   this.IsDiplay = true;
  // }
}

