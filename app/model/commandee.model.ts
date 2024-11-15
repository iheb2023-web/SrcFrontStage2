import { produit } from "./produit.model";
import { DetailCommande } from "./details.model";
import { compte } from "./compte.model";
export class Commande {
  id!: number;
  date_commande!: Date;
  statut!: string;
  client!: compte;
  details!: DetailCommande[];
  }