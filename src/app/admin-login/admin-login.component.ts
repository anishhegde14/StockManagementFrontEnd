import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
error:String;
  constructor(private auth:AuthenticationService,
    private router:Router) { }
    
    findCredentials(form: NgForm){
      this.auth.findCredentials(form.value).subscribe(response => {
        console.log(response);
        if(response.message==='Admin'){
          localStorage.setItem('bean',JSON.stringify(response.message));
          localStorage.setItem('id',JSON.stringify(response.bean.id))
          localStorage.setItem('userCredentials', JSON.stringify(response.bean))
          console.log('userCredentials stored in localStorage ');
          this.router.navigateByUrl('/');
        }
       else  if(response.message==='Investor'){
          localStorage.setItem('bean',JSON.stringify(response.message));
          localStorage.setItem('id',JSON.stringify(response.bean.id))
          localStorage.setItem('userCredentials', JSON.stringify(response.bean))
          console.log('userCredentials stored in localStorage ');
          this.router.navigateByUrl('/');
        }
        else if(response.message==='Manager'){
          localStorage.setItem('bean',JSON.stringify(response.message));
          localStorage.setItem('userCredentials', JSON.stringify(response.bean))
          localStorage.setItem('id',JSON.stringify(response.bean.id))
          console.log('userCredentials stored in localStorage ');
          this.router.navigateByUrl('/');
        }
        else{
          this.error=response.description;
          setTimeout(() => {
            this.error=null;
          }, 3000);
        }
      });
    }

  ngOnInit() {
  }

}
