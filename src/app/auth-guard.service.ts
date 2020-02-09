import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot):boolean{
    const userCredentials=JSON.parse(localStorage.getItem('userCredentials'));
    const role= route.data.role;
    console.log(role);
    console.log(userCredentials);
    console.log(userCredentials.role);
    if(userCredentials.role===role){
      return true;
    }
    else{
      return false;
    }
  }
}
