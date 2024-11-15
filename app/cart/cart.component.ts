import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';
import { Command } from '../model/commande.model';
import { produit } from '../model/produit.model';
import { Commande } from '../model/commandee.model';
import { DetailCommande } from '../model/details.model';
import { CmdService } from '../services/cmd.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { compte } from '../model/compte.model';
import * as moment from 'moment';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: produit[] = [];
  currentCommand: Command | null = null;
  detailCommand = new DetailCommande();
  commande = new Commande();

  constructor(private cartService: PanierService, private  cmdService: CmdService, private rout:Router,private authService: ClientService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items: produit[]) => {
      this.cartItems = items;
    });

    this.currentCommand = this.cartService.getCurrentCommand();
  }

  updateQuantity(item: produit, change: number): void {
    if (item) {
      item.quantite = (item.quantite || 0) + change;
      if (item.quantite < 0) {
        item.quantite = 0;
      }
    }
  }
  Supprimer(item: produit): void {
    this.cartService.removeFromCart(item);
  }

  passerCommande() {
    this.authService.getUserId().subscribe(
      (userId) => {
        if (userId !== null) {
          this.commande.date_commande = new Date('2024-02-06 16:36:27.000000');
          this.commande.statut = "non livré";
          this.commande.client = {
            id: userId,
            nom: '', 
            email: '',
            adresse: '',
            motDePasse: '',
            role: ''
          };
    
          this.cartService.clearCart();
          this.cmdService.creerCommande(this.commande).subscribe(
            (createCmd) => {
              console.log('commande créée avec succès:', createCmd);
              this.rout.navigate(['/home']);
            },
            (error: any) => {
              console.error('Erreur lors de la création de la commande:', error);
            }
          );
    
          alert('Votre commande a bien été passée');
        } else {
          console.error('Impossible de récupérer l\'ID de l\'utilisateur.');
        }
      },
      (error: any) => {
        console.error('Erreur lors de la récupération de l\'ID de l\'utilisateur:', error);
      }
    );
  }
  
  

}
