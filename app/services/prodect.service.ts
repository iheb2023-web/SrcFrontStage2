import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {produit}  from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProdectService implements OnInit {
  private apiUrl = 'http://localhost:9090/api/v1'; // spring boot

 constructor(private http: HttpClient) { }


getProd(): Observable<produit[]> {
  return this.http.get<produit[]>(`${this.apiUrl}/Prod`);
}

createProd(newProd: produit): Observable<produit> {
  return this.http.post<produit>(`${this.apiUrl}/Prod`, newProd);
}

updateProd(id: number, updatedProd: produit): Observable<produit> {
  const url = `${this.apiUrl}/Prod/${id}`;
  return this.http.put<produit>(url, updatedProd);
}

getProdById(id: number): Observable<produit> {
  const url = `${this.apiUrl}/Prod/${id}`;
  return this.http.get <produit>(url);
}

deleteProd(id :number): Observable<produit>{
  const url= `${this.apiUrl}/Prod/${id}`;
  return this.http.delete<produit>(url);
}


  
 ngOnInit(): void {
 }
  }

