import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel, NgForm} from '@angular/forms';
import { Currency } from "app/currency/currency";
import { CurrencyService } from "app/currency/currency.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-currency-edit',
  templateUrl: './currency-edit.component.html'
})
export class CurrencyEditComponent implements OnInit {
  @Input() rowId: number = 0;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>(); 
  currency: Currency = new Currency();
  errorMessage: string;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    if(this.rowId > 0) {
      console.log(`Selected rowId: ${this.rowId}` );
      this.currencyService.getCurrency(this.rowId).subscribe(
        row => this.currency = row,
        error => this.errorMessage = <any>error
      );
    }
  }

  onCancel() {
    this.close.emit(true);
  }

  onSubmit(value: Currency) {
    console.log("Submited:");
    console.log(value);
    var retCurr = this.currencyService.updateCurrency(value);
    console.log(`This is a returned value ${retCurr}`);
    this.close.emit(true);
  }

}
