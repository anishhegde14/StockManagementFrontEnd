import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-view-profile-of-manager',
  templateUrl: './view-profile-of-manager.component.html',
  styleUrls: ['./view-profile-of-manager.component.css']
})
export class ViewProfileOfManagerComponent implements OnInit {

  message: string;
  err: string;
  id : number;
  manager : Manager;
  constructor(private router: Router,
              private managerService: ManagerService
  ) {
    this.id=JSON.parse(localStorage.getItem("userCredentials")).id;
    this.getManager(this.id)
   }

   modifyManager(manager) {
    this.router.navigate([`/modify-manager/${manager.id}`],
      {
        queryParams: {
          id:manager.id,
          managerName:manager.managerName,
           companyName : manager.companyName,
          emailId:manager.emailId,
          address : manager.address,
          companyId:manager.companyId,
         
        }
      }
    );

    
  }
getManager(id){
  this.managerService.searchManager(id).subscribe(res=>{

    console.log(res)
    this.manager=res.managerBean;
    
  })
}
  ngOnInit() {
  }
}