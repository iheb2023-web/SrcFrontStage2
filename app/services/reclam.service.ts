import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reclamation } from '../model/reclamation.model';

@Injectable({
  providedIn: 'root'
})
export class ReclamService implements OnInit {
  private apiUrl = 'http://localhost:9090/api/v1';

  constructor(private http: HttpClient) { }

  getReclam(): Observable<reclamation[]>{
    return this.http.get<reclamation[]>(this.apiUrl + '/Reclamation');
  }
  createReclam(newReclam: reclamation): Observable<reclamation> {
    return this.http.post<reclamation>(`${this.apiUrl}/Reclamation`, newReclam);
  }

  deleteReclam(id :number): Observable<reclamation>{
    const url= `${this.apiUrl}/Reclamation/${id}`;
    return this.http.delete<reclamation>(url);
  }

  ngOnInit(): void {
    
  }
}
