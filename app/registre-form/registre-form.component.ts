import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';
import { client } from '../model/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre-form',
  templateUrl: './registre-form.component.html',
  styleUrls: ['./registre-form.component.css']
})
export class RegistreFormComponent {
  constructor(public authService: ClientService, private router: Router) {}

  user = new client();
  confirmationMotDePasse: string = '';
  erreur: boolean = false;

  register() {
    // Vérifier si tous les champs sont renseignés
    if (!this.user.nom || !this.user.email || !this.user.adresse || !this.user.motDePasse || !this.confirmationMotDePasse) {
      this.erreur = true;
      return;
    }

    // Vérifier si les mots de passe correspondent
    if (this.user.motDePasse !== this.confirmationMotDePasse) {
      this.erreur = true;
      return;
    }

    // Tout est correct, procéder à l'enregistrement
    this.authService.createClient(this.user).subscribe(
      (data) => {
        console.log('Utilisateur créé');
        this.router.navigate(['/connecter']);
      },
      (error: any) => {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
      }
    );
  }
}
