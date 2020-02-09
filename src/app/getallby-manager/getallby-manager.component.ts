import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-getallby-manager',
  templateUrl: './getallby-manager.component.html',
  styleUrls: ['./getallby-manager.component.css']
})
export class GetallbyManagerComponent implements OnInit {
  managers: Manager[];
  message: string;

  constructor(public router: Router,
              public managerService: ManagerService
  ) {
    this.getAllManager();
  }

  getAllManager() {
    this.managerService.getAllManager().subscribe(response => {
      console.log(response);
      this.managers = response.beans;
    },
      err => {
        console.log(err);
      });
  }

  
  ngOnInit() {
  }
  
}
