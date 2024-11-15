import { Component, OnInit } from '@angular/core';
import { ProdectService } from '../services/prodect.service';
import { produit } from '../model/produit.model';
import { AuthService } from '../services/auth.service';
import { CmdService } from '../services/cmd.service';
import { compte } from '../model/compte.model';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-prodect',
  templateUrl: './prodect.component.html',
  styleUrls: ['./prodect.component.css']
})
export class ProdectComponent implements OnInit {

  sprin: produit[] = [];

  constructor(private ProdectService: ProdectService) { }


  ngOnInit() {
        this.ProdectService.getProd().subscribe(data => {
          this.sprin = data;
        });
  }
    }