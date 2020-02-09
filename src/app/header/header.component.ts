import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isAdmin() {
    if(!isNullOrUndefined(localStorage.getItem('userCredentials'))){
    const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
    if (userCredentials.role === 'admin') {
      return true;
    } else {
      return false;
    }
  }else{
    return false;
  }
}

  isManager() {
    if(!isNullOrUndefined(localStorage.getItem('userCredentials'))){
      const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
      if (userCredentials.role === 'manager') {
        return true;
      } else {
        return false;
      }
    }else{
      return false;
    }
  }

  isInvestor() {
    if(!isNullOrUndefined(localStorage.getItem('userCredentials'))){
      const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
      if (userCredentials.role === 'investor') {
        return true;
      } else {
        return false;
      }
    }else{
      return false;
    }
  }
  isLoggedIn() {
    const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
    if (userCredentials) {
      return true;
    } else {
      return false;
    }
  }
logout() {
  localStorage.clear();
  this.router.navigateByUrl('/admin-login');
}
  


}
