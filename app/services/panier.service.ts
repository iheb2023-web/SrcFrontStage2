
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PanierItem } from '../model/panier.model';
import { produit } from '../model/produit.model';
import { Command } from '../model/commande.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PanierService {
  constructor(private rout: Router){}
  private cartItems: produit[] = [];
  private cartSubject = new BehaviorSubject<produit[]>([]);
  private currentCommand: Command | null = null;

  getCartItems() {
    return this.cartSubject.asObservable();
  }

  getCurrentCommand() {
    return this.currentCommand;
  }

  addToCart(product: produit) {
    this.cartItems.push(product);
    this.cartSubject.next([...this.cartItems]);
    if (!this.currentCommand) {
      this.currentCommand = {
        id:1,
        products: [product]
        
      };
    } else {
      this.currentCommand.products.push(product);
      this.rout.navigate(['panier']);
    }
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next([...this.cartItems]);
    this.currentCommand = null;
  }

  removeFromCart(product: produit) {
    const index = this.cartItems.findIndex((item) => item === product);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartSubject.next([...this.cartItems]);
      if (this.currentCommand) {
        const productIndex = this.currentCommand.products.findIndex((item) => item === product);
        if (productIndex !== -1) {
          this.currentCommand.products.splice(productIndex, 1);
        }
      }
    }
  }
  nombreProduit(){
    return this.cartItems.length;
    
    
  }

}
