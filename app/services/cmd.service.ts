import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { DetailCommande } from '../model/details.model';
import { Command } from '../model/commande.model';
import { Commande } from '../model/commandee.model';

@Injectable({
  providedIn: 'root'
})
export class CmdService {
  private apiUrl = 'http://localhost:9090/api/v1'; 

  constructor(private http: HttpClient) { }

  creerCommande(commande: any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/Commande`, commande);
  }

  AjouterDetailsCommande(DetailCommande: any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/DetCmd`, DetailCommande);
  }

  getCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.apiUrl}/Commande`);
  }
  getDetailCommandes(): Observable<DetailCommande[]> {
    return this.http.get<DetailCommande[]>(`${this.apiUrl}/DetCmd`);
  }

  getCommandeById(id: number): Observable<Command> {
    const url = `${this.apiUrl}/Commande/${id}`;
    return this.http.get<Command>(url);
  }

  updateCommande(id: number, updatedCommande: Command): Observable<Command> {
    const url = `${this.apiUrl}/Commande/${id}`;
    return this.http.put<Command>(url, updatedCommande);
  }

  deleteCommande(id: number): Observable<Command> {
    const url = `${this.apiUrl}/Commande/${id}`;
    return this.http.delete<Command>(url);
  }
}
