import { CanActivate, ActivatedRouteSnapshot,  RouterStateSnapshot} from '@angular/router';

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',  
})
export class articletGuard implements CanActivate {

  constructor( private rout: Router, private authServ: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authServ.testerAdmin() == true) {
      return true;
    } else {
      this.rout.navigate(['forbidden']);
       return false;
    }
  }
}
