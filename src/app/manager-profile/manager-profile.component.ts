import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../manager.service';
@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['./manager-profile.component.css']
})
export class ManagerProfileComponent implements OnInit {

  managers: Manager[];
  message: string;

  ngOnInit() {
  }
  
  constructor(public router: Router,
              public managerService: ManagerService
  ) {
    this.getAllManager();
  }

  getAllManager() {
    this.managerService.getAllManager().subscribe(response => {
      console.log(response);
      this.managers = response.managerList;
    },
      err => {
        console.log(err);
      });
  }
  deleteManager(manager: Manager) {
    this.managerService.deleteManager(manager).subscribe(res => {
      console.log(res);
      if (res.message === 'Success') {
        this.managers.splice(this.managers.indexOf(manager), 1);
        this.message = res.message;
      }
    });
  }

  modifyManager(manager) {
    this.managerService.selectManagerToUpdate = manager;
    this.router.navigateByUrl('/modify-manager');
  }

}
