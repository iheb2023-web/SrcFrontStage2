import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { compte } from '../model/compte.model';
import { map, tap } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  deleteClient(id: number) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:9090/api/v1';
  private users: compte[] = [];
  private userCourantSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private isConnectedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private roleCourantSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private errorMessageSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");

  userCourant$ = this.userCourantSubject.asObservable();
  isConnected$ = this.isConnectedSubject.asObservable();
  roleCourant$ = this.roleCourantSubject.asObservable();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(private router: Router, private http: HttpClient) {}

  private updateState(user: compte): void {
    this.isConnectedSubject.next(true);
    this.userCourantSubject.next(user.nom!);
    this.roleCourantSubject.next(user.role!);
    localStorage.setItem('userCourant', user.nom!);
    localStorage.setItem('isConnected', 'true');
  }

  testerAdmin(): boolean {
    const roleCourant = this.roleCourantSubject.getValue();
    return roleCourant === "admin";
  }
  

  connect(user: compte): void {
    this.getAdmin().subscribe((users) => {
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

  private getUserByName(userName: string): Observable<compte> {
    return this.getAdmin().pipe(
      map((users: any[]) => users.find((user: { nom: string; }) => user.nom === userName))
    );
  }
  disconnect(): void {
    this.isConnectedSubject.next(false);
    this.userCourantSubject.next("");
    this.roleCourantSubject.next("");
    this.router.navigate(['/connexion']);
    localStorage.removeItem('userCourant');
    localStorage.removeItem('isConnected');
  }
  

  getAdmin(): Observable<compte[]> {
    return this.http.get<compte[]>(`${this.apiUrl}/Admin`)
  }
  createAdmin(newUser: compte): Observable<compte> {
    return this.http.post<compte>(`${this.apiUrl}/Admin`, newUser);
  }
  updateAdmin(id: number, updatedProd: compte): Observable<compte> {
    const url = `${this.apiUrl}/Admin/${id}`;
    return this.http.put<compte>(url, updatedProd);
  }
  
  getAdminById(id: number): Observable<compte> {
    const url = `${this.apiUrl}/Admin/${id}`;
    return this.http.get <compte>(url);
  }
  
  deleteAdmin(id :number): Observable<compte>{
    const url= `${this.apiUrl}/Admin/${id}`;
    return this.http.delete<compte>(url);
  }

  
  
  

  


}
