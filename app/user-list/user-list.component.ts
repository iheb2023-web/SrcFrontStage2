import { Component } from '@angular/core';
import { compte } from '../model/compte.model';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { client } from '../model/client.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  user: client[] = [];
 
  constructor(private rout: Router, private authServ: ClientService){}

  deleteUsers(id: number){
    this.authServ.deleteClient(id).subscribe(
      (deletedClient) => {
        console.log('client supprimer avec succès:', deletedClient);
        this.rout.navigate(["/dashboard"]);
      },
      (error) => {
        console.error('Erreur lors de la suppression du client:', error);
      }
    );

  }

  ngOnInit(): void {
    this.authServ.getClient().subscribe(data => {this.user = data});  }


}
