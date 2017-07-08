import { Component, OnInit } from '@angular/core';
import { ICurrency } from "app/currency/currency";
import { CurrencyService } from "app/currency/currency.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
  title: string = 'Currency List';
  errorMessage: string;
  currencies: ICurrency[];

  constructor(private _currencyService: CurrencyService) { }

  ngOnInit() {
      this._currencyService.getCurrencies()
      .subscribe(currencies => this.currencies = currencies, 
                  error => this.errorMessage = <any>error);
  }

  onAdd() {
    alert("Add");
  }
}
