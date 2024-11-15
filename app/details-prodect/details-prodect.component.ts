import { Component, OnInit } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProdectService } from '../services/prodect.service';
import { NgModule } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PanierService } from '../services/panier.service';
import { AuthService } from '../services/auth.service';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-details-prodect',
  templateUrl: './details-prodect.component.html',
  styleUrls: ['./details-prodect.component.css']
})
export class DetailsProdectComponent implements OnInit {
  constructor(private prodectService: ProdectService, private route:ActivatedRoute, private panierService: PanierService,private rout: Router, public authse: ClientService){}
  newProd = new produit();
  idProd : number=0;

  ajouterAuPanier() {
    this.panierService.addToCart(this.newProd);
    this.rout.navigate(['/prodect'])
  }
  
  getProdectById(){
    this.prodectService.getProdById(this.idProd).subscribe(
      (product)=>{
      this.newProd= product;
    },
    (error)=>{
      console.log("Erreur lors de chargement des details du produit",error)
      });
    }

    ngOnInit(): void {
      const idParam = this.route.snapshot.paramMap.get('id');
      if (idParam !== null) {
        this.idProd = +idParam;      
        this.getProdectById();
      } else {
        console.error('L\'ID du produit n\'a pas été trouvé dans l\'URL.');
      }
      
    }

}
