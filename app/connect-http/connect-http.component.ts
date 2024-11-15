import { Component,OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ClientService } from '../services/client.service';
import { HttpClient } from '@angular/common/http';
import { compte } from '../model/compte.model';
import { Route,Router } from '@angular/router';
import { client } from '../model/client.model';

@Component({
  selector: 'app-connect-http',
  templateUrl: './connect-http.component.html',
  styleUrls: ['./connect-http.component.css']
})

export class ConnectHttpComponent implements OnInit {

  admin!: compte[];
  user = new compte();
  
  clients!:client[];
  cl = new client();

  erreur = false;
  userCourant = ""; 
  constructor(private clientServ: ClientService, private userServ: AuthService, private router: Router) {}

  getUsers(): void {
    this.userServ.getAdmin().subscribe(items => (this.admin = items));
    this.clientServ.getClient().subscribe(items=>(this.clients=items))
  }

  disconnect(): void {
    this.userServ.disconnect();
    this.clientServ.disconnect();
  }

  connected(): void {
    this.clientServ.connect(this.cl);

    this.clientServ.isConnected$.subscribe((isConnected) => {
      if (isConnected) {
        this.clientServ.userCourant$.subscribe((userCourant) => {
            this.router.navigate(['/prodect']);
        });
      } else {
        this.erreur = true;
      }
    });
  }


  onFormSubmit(): void {
    this.connected();
  }

  reset(): void {
    this.erreur = false;
  }

  ngOnInit(): void {
    this.getUsers();
    
  }
}
