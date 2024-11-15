import { Component } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { compte } from '../model/compte.model';
import { AuthService } from '../services/auth.service';
import { ClientService } from '../services/client.service';
import { client } from '../model/client.model';
import { NgForm } from '@angular/forms';
{AuthService}
@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.css']
})
export class InsertUserComponent {
  newUser= new client ();
  //roles: string[] = ['client', 'admin'];
  constructor( private rout: Router, private ClientService: ClientService){}

  createUsers(){
    this.ClientService.createClient(this.newUser).subscribe(
      (createAdmin) => {
        console.log('utilisateur ajouter avec succès:', createAdmin);
        window.location.reload(); 
       // this.rout.navigate(['/dashboard']);

      },
      (error: any) => {
        console.error('Erreur lors de la création de la utilisateur:', error);
      }
    );
  }

  


}
