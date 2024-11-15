import { Component } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProdectService } from '../services/prodect.service';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-prodect',
  templateUrl: './insert-prodect.component.html',
  styleUrls: ['./insert-prodect.component.css']
})
export class InsertProdectComponent {
  newproduit= new produit ();
  categories: string[] = ['Fruits', 'Salades et légumes-feuilles', 'Agrumes', 'Légumes'];
  constructor(private prodectService: ProdectService, private rout: Router){}

  /*createProdect(){
    this.prodectService.createProd(this.newproduit).subscribe(
      (createProd) => {
        console.log('produit ajouter avec succès:', createProd);
        this.rout.navigate(['/dashboard']);
      },
      (error: any) => {
        console.error('Erreur lors de la création de la produit:', error);
      }
    );
  }*/

  createProdect() {
    this.prodectService.createProd(this.newproduit).subscribe(
      (createProd) => {
        console.log('produit ajouté avec succès:', createProd);
        window.location.reload(); 
      },
      (error: any) => {
        console.error('Erreur lors de la création du produit:', error);
      }
    );
  }

//   createProdect(form: NgForm) {
//     if (form.valid) {
//         // Appeler le service pour créer le produit
//         this.prodectService.createProd(this.newproduit).subscribe(
//             (createdProduct) => {
//                 console.log("Produit ajouté avec succès:", createdProduct);
//                 // Peut-être rediriger ou effectuer d'autres actions
//             },
//             (error) => {
//                 console.error("Erreur lors de la création du produit:", error);
//             }
//         );
//     } else {
//         console.error("Le formulaire est invalide.");
//     }
// }

  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
        const fileName: string = file.name;
        const fileNameWithoutExtension: string = fileName.split('.')[0]; 
        this.newproduit.image = fileNameWithoutExtension; 
    }
}

}
