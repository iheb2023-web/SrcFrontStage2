import { Component, OnInit } from '@angular/core';
import { ReclamService } from '../services/reclam.service';
import { reclamation } from '../model/reclamation.model';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent  implements OnInit{
  constructor(private reclamService: ReclamService){}

  tabReclam: reclamation[]=[];

  deleteReclam(idProd: number){
    this.reclamService.deleteReclam(idProd).subscribe(
      (deletedProd) => {
        console.log('reclamation supprimer avec succès:', deletedProd);
        console.log(idProd);
      },
      (error) => {
        console.error('Erreur lors de la suppression du reclamation:', error);
      }
    );

  }
  ngOnInit(): void {
    this.reclamService.getReclam().subscribe(
      data => {this.tabReclam=data},
       )
  }

}
