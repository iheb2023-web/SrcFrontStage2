import { Component, OnInit } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProdectService } from '../services/prodect.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  prod: produit[] = [];
 
  constructor(private rout: Router, private prodectService: ProdectService){}

  deleteProduct(idProd: number) {
    this.prodectService.deleteProd(idProd).subscribe(
      (deletedProd) => {
        console.log('Produit supprimé avec succès:', deletedProd);
        window.location.reload(); // Recharge la page après la suppression réussie du produit
      },
      (error) => {
        console.error('Erreur lors de la suppressssion du produit:', error);
      }
    );
  }
  

  ngOnInit(): void {
    this.prodectService.getProd().subscribe(data => {this.prod = data});  }

}
