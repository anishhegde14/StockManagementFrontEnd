import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagerService } from '../manager.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-manager',
  templateUrl: './modify-manager.component.html',
  styleUrls: ['./modify-manager.component.css']
})
export class ModifyManagerComponent implements OnInit {

 
  id1;
  managerName1;
         companyName1;
          emailId1;
          address1;
          companyId1;

          constructor(public managerService: ManagerService,
            private router: Router,
            private activatedRouter: ActivatedRoute) {
              activatedRouter.params.subscribe( data => {
                console.log(data.id);
                this.id1 = data.id;
              });

              activatedRouter.queryParams.subscribe( data => {
                console.log(data);
                this.id1=data.id;
                this.companyId1 = data.companyId;
                this.managerName1 = data.managerName;
                this.companyName1 = data.companyName;
                this.emailId1=data.emailId;
                this.address1 = data.address;
                
                     });
             }

             modifyManager(form: NgForm) {
              console.log(form.value);
              this.managerService.modifyManager(form.value).subscribe(data => {
                console.log(data);
                this.router.navigateByUrl('/viewmprofile');
              });
            }

  ngOnInit() {
  }

}
