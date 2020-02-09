import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
login : any;
  constructor(private authenticationService : AuthenticationService,
    private router : Router
    ) {

    this.login=JSON.parse(localStorage.getItem("userCredentials"))
    console.log(this.login)
   }

  ngOnInit() {
  }

  updatePassword(form : NgForm){
    this.login.password=form.value.password;
    this.authenticationService.changePassword(this.login).subscribe(response=>{
      console.log(response)

    })
  }

}
