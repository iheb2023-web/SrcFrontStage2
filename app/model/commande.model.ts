import { produit } from "./produit.model";

export class Command {
    id?: number; 
    products!: produit[]; 
  }