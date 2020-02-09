import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  loginInfo(login: NgForm) {
    console.log(login.value);
  }

  managerInfo(manager: NgForm) {
    console.log(manager.value);
  }

  step = 0;

  ngOnInit() {
  }

  addManager(login: NgForm, manager: NgForm) {
    this.managerService.addManager(login).subscribe(response => {

      console.log(response)
    })
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
