import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel, NgForm} from '@angular/forms';
import { ICurrency } from "app/currency/currency";
import { CurrencyService } from "app/currency/currency.service";

@Component({
  selector: 'app-currency-edit',
  templateUrl: './currency-edit.component.html'
})
export class CurrencyEditComponent implements OnInit {
  @Input() rowId: number = 0;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>(); 
  currency: ICurrency;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currency = {rowId: 0,  code: "", abbreviation: "", description: "asasa"};
    console.log("onInit");
  }

  onCancel() {
    console.log("Click on Cancel");
    this.close.emit(true);
  }

  onSubmit(value: ICurrency) {
    console.log("Click on Save");
    this.currency = value;
    console.log(this.currency);
    this.close.emit(true);
  }

}
