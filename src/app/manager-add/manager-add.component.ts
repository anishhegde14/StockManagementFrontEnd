import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-manager-add',
  templateUrl: './manager-add.component.html',
  styleUrls: ['./manager-add.component.css']
})
export class ManagerAddComponent implements OnInit {

  success: string;
  failure: string;

  constructor(private manager: ManagerService) { }
  addManager(form: NgForm) {
    this.manager.addManager(form.value).subscribe(data => {
      console.log(data);

      if (data.statusCode === 201) {
        this.success = data.description;
        setTimeout(() => {
          this.success = null;
        }, 3000);
        form.reset();
      } else {
        this.failure = data.description;
        setTimeout(() => {
          this.failure = null;
        }, 3000);
      }
    });
  }

  ngOnInit() {
  }

}
