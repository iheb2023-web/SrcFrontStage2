import { Component } from '@angular/core';
import { ReclamService } from '../services/reclam.service';
import { reclamation } from '../model/reclamation.model';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  newReclam = new reclamation();
  constructor(private reclamService: ReclamService, private rout : Router){}

  createReclam() {
    this.reclamService.createReclam(this.newReclam).subscribe(
      (createdReclam) => {
        console.log('Réclamation créée avec succès:', createdReclam);
        this.rout.navigate(['/home']);
      },
      (error) => {
        console.error('Erreur lors de la création de la réclamation:', error);
      }
    );
  }


}
