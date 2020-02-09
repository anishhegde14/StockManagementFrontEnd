import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  success: string;
  failure: string;

  constructor(private stock: StockService) { }

  ngOnInit() {
  }

  addStock(form: NgForm) {
    this.stock.addStock(form.value).subscribe(data => {
      console.log(data);

      if (data.statusCode === 200) {
        this.success = data.message;
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
}