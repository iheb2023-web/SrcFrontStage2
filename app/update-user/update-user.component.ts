import { Component, OnInit } from '@angular/core';
import { compte } from '../model/compte.model';
import { AuthService } from '../services/auth.service';
import { ClientService } from '../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from '../model/client.model';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  roles: string[] = ['client', 'admin'];
  newUser = new client();
  idProd : number=0;
  constructor(private authServ: ClientService, private rout: Router, private route: ActivatedRoute,){}
  
  getProdectById(){
    this.authServ.getClientById(this.idProd).subscribe(
      (product)=>{
      this.newUser= product;
    },
    (error)=>{
      console.log("Erreur lors de chargement des details du produit",error)
      });
    }
  updateProduct() {
    this.authServ.updateClient(this.idProd, this.newUser).subscribe(
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
