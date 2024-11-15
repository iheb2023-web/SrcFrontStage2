import { Component, OnInit } from '@angular/core';
import { ProdectService } from '../services/prodect.service';
import { produit } from '../model/produit.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  numberOfProducts: number = 0;
  lienProdClique: boolean = false;
  lienUserClique: boolean = false;
  lienProd: boolean = false;
  lienUser:boolean= false;
  lienReclam:boolean=false;
  lienCmd:boolean=false;

 
  tabProd: produit[]=[];

  constructor(private productService: ProdectService){}

  onLienClique(): void {
    this.lienProdClique = true;
    this.lienUserClique = false;
    this.lienProd= false;
    this.lienUser= false;
    this.lienReclam=false;
    this.lienCmd=false;
    
  }
  onLienClique2(): void {
    this.lienUserClique = true;
    this.lienProdClique = false;
    this.lienProd= false;
    this.lienUser= false;
    this.lienReclam=false;
    this.lienCmd=false;
  }
  onLienClique3(): void {
    this.lienProd = true;
    this.lienProdClique = false;
    this.lienUserClique = false;
    this.lienUser= false;
    this.lienReclam=false;
    this.lienCmd=false;
   
  }
  onLienClique4(): void {
    this.lienUser = true;
    this.lienProdClique = false;
    this.lienUserClique = false;
    this.lienProd= false;
    this.lienReclam=false;
    this.lienCmd=false;
   
  }
  onLienClique5(): void {
    this.lienReclam = true;
    this.lienProdClique = false;
    this.lienUserClique = false;
    this.lienProd= false;
    this.lienUser= false;
    this.lienCmd=false;
    
  }
  onLienClique6(): void {
    this.lienCmd=true;
    this.lienReclam = false;
    this.lienProdClique = false;
    this.lienUserClique = false;
    this.lienProd= false;
    this.lienUser= false;
    
     }

  calculerSommeDesPrix(): number {
    return this.tabProd.reduce((somme, produit) => somme + produit.prix, 0);
  }



  ngOnInit(): void {
    this.productService.getProd().subscribe(products => {
      if (products) {
        this.numberOfProducts = products.length;}
    this.productService.getProd().subscribe(data=>{this.tabProd=data})
    });
  }

}
