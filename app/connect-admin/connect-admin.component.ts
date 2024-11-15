import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { compte } from '../model/compte.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect-admin',
  templateUrl: './connect-admin.component.html',
  styleUrls: ['./connect-admin.component.css']
})
export class ConnectAdminComponent {
  users!: compte[];
  user = new compte();
  erreur = false;
  userCourant = ""; 
  roleCourant = "";
  constructor(private userServ: AuthService, private router: Router) {}

  getUsers(): void {
    this.userServ.getAdmin().subscribe(items => (this.users = items));
  }

  disconnect(): void {
    this.userServ.disconnect();
  }

  connected(): void {
    this.userServ.connect(this.user);
    this.userServ.isConnected$.subscribe((isConnected) => {
      if (isConnected) {
        this.userServ.userCourant$.subscribe((userCourant) => {
            this.router.navigate(['/dashboard']);
        });
      } else {
        this.erreur = true;
      }
    });
  }

  reset(): void {
    this.erreur = false;
  }

  ngOnInit(): void {
    this.getUsers();
  }
}


