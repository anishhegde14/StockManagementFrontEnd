import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:String;
  constructor(private auth:AuthenticationService,
    private router:Router) { }
    
    findCredentials(form: NgForm){
      this.auth.findCredentials(form.value).subscribe(response => {
        console.log(response);
        if(response.message==='investor'){
          localStorage.setItem('bean',JSON.stringify(response.message));
          localStorage.setItem('id',JSON.stringify(response.bean.id))
          console.log('userCredentials stored in localStorage ');
          this.router.navigateByUrl('/');
        }
        else if(response.message==='manager'){
          localStorage.setItem('bean',JSON.stringify(response.message));
          localStorage.setItem('id',JSON.stringify(response.bean.id))
          console.log('userCredentials stored in localStorage ');
          this.router.navigateByUrl('/');
        }
        else{
          this.error=response.message;
          setTimeout(() => {
            this.error=null;
          }, 3000);
        }
      });
    }

  ngOnInit() {
  }

}
