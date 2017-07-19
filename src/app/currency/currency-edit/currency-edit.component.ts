import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ICurrency } from "app/currency/currency";
import { CurrencyService } from "app/currency/currency.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-currency-edit',
  templateUrl: './currency-edit.component.html'
})
export class CurrencyEditComponent implements OnInit {
  currency: ICurrency;

  constructor(private _currencyService: CurrencyService) { }

  ngOnInit() {
  }

  onSubmit(currency: ICurrency) {
    // this._currencyService.updateCurrency(currency);
    console.log(currency);
  }

}
