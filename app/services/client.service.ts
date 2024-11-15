import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { client } from '../model/client.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { compte } from '../model/compte.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:9090/api/v1';
  private users: client[] = [];

  private userCourantSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private isConnectedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private errorMessageSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");

  userCourant$ = this.userCourantSubject.asObservable();
  isConnected$ = this.isConnectedSubject.asObservable();
  errorMessage$ = this.errorMessageSubject.asObservable();
  

  constructor(private router: Router, private http: HttpClient) {  }


  private updateState(user: client): void {
    this.isConnectedSubject.next(true);
    this.userCourantSubject.next(user.nom!);
    localStorage.setItem('userCourant', user.nom!);
    localStorage.setItem('isConnected', 'true');
  }

  connect(user: client): void {
    this.getClient().subscribe((users) => {
      const foundUser = users.find((u) => u.email == user.email && u.motDePasse == user.motDePasse);
      if (foundUser) {
        this.updateState(foundUser);
      } else {
        this.errorMessageSubject.next("Identifiants incorrects");
      }
    });
  }
  getUserId(): Observable<number> {
    return this.userCourant$.pipe(
      switchMap(userName => this.getUserByName(userName)),
      map((user: { id: any; }) => user.id)
    );
    
  }

  private getUserByName(userName: string): Observable<client> {
    return this.getClient().pipe(
      map((users: any[]) => users.find((user: { nom: string; }) => user.nom === userName))
    );
  }
  disconnect(): void {
    this.isConnectedSubject.next(false);
    this.userCourantSubject.next("");
    this.router.navigate(['/connexion']);
    localStorage.removeItem('userCourant');
    localStorage.removeItem('isConnected');
  }





  getClient(): Observable<client[]> {
    return this.http.get<client[]>(`${this.apiUrl}/User`)
  }
  createClient(newUser: client): Observable<client> {
    return this.http.post<client>(`${this.apiUrl}/User`, newUser);
  }
  updateClient(id: number, updatedProd: client): Observable<client> {
    const url = `${this.apiUrl}/User/${id}`;
    return this.http.put<client>(url, updatedProd);
  }
  
  getClientById(id: number): Observable<client> {
    const url = `${this.apiUrl}/User/${id}`;
    return this.http.get <client>(url);
  }
  
  deleteClient(id :number): Observable<client>{
    const url= `${this.apiUrl}/User/${id}`;
    return this.http.delete<client>(url);
  }
}
