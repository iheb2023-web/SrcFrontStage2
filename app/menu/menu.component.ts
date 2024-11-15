import { Component,OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { PanierService } from '../services/panier.service';
import { AuthService } from '../services/auth.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
   constructor( private panierService: PanierService, public authserv: ClientService) {}
    closeOffcanvas() {
      console.log('Fermeture de l\'offcanvas');
    }
    ngOnInit(): void {
      
    }
    NombreProd(): number {
      return this.panierService.nombreProduit();
    }

}
