import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailCommande } from '../model/details.model';
import { CmdService } from '../services/cmd.service'; 
import { Commande } from '../model/commandee.model';

@Component({
  selector: 'app-cmd-list',
  templateUrl: './cmd-list.component.html',
  styleUrls: ['./cmd-list.component.css']
})
export class CmdListComponent implements OnInit {
  commandesDetails: DetailCommande[]=[];
  commandes: Commande[]=[];

  constructor(private router: Router, private cmdServ: CmdService) {}

  deleteCommande(id: number) {
    this.cmdServ.deleteCommande(id).subscribe(
      (delCmd) => {
        console.log('Commande supprimée avec succès:', delCmd);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Erreur lors de la suppression de la commande:', error);
      }
    );
  }

  ngOnInit(): void {
    this.cmdServ.getCommandes().subscribe(data => {
      this.commandes = data;
    });
    this.cmdServ.getDetailCommandes().subscribe(data => {
      this.commandesDetails = data;
    });
  }
}
