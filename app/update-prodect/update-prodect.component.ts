import { Component, OnInit } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProdectService } from '../services/prodect.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-prodect',
  templateUrl: './update-prodect.component.html',
  styleUrls: ['./update-prodect.component.css']
})
export class UpdateProdectComponent implements OnInit{
  categories: string[] = ['Fruits', 'Salades et légumes-feuilles', 'Agrumes', 'Légumes'];
  newProd = new produit();
  idProd : number=0;
  constructor(private prodectService: ProdectService, private rout: Router, private route: ActivatedRoute,){}

  getProdectById(){
    this.prodectService.getProdById(this.idProd).subscribe(
      (product)=>{
      this.newProd= product;
    },
    (error)=>{
      console.log("Erreur lors de chargement des details du produit",error)
      });
    }
  updateProduct() {
    this.prodectService.updateProd(this.idProd, this.newProd).subscribe(
      (updatedProduct) => {
        console.log('Produit mis à jour avec succès:', updatedProduct);
        this.rout.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du produit:', error);
      }
    );
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
