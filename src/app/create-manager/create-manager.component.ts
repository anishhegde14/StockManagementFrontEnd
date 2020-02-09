import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.css']
})
export class CreateManagerComponent implements OnInit {

  success: string;
  failure: string;

  constructor(private manager: ManagerService) { }

  
  
  addManager(form: NgForm) {
    this.manager.addManager(form.value).subscribe(data => {
      console.log(data);

      if (data.statusCode === 200) {
        this.success = data.message;
        setTimeout(() => {
          this.success = null;
        }, 3000);
        form.reset();
      } else {
        this.failure = data.message;
        setTimeout(() => {
          this.failure = null;
        }, 3000);
      }
    });
  }

  ngOnInit() {
  }

}
