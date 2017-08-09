import { Component, OnInit } from '@angular/core';
import { Currency } from "app/currency/currency";
import { CurrencyService } from "app/currency/currency.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: [ './currency-list.component.scss'],
  providers: [ CurrencyService ]
})
export class CurrencyListComponent implements OnInit {
  title: string = 'Currency List';
  errorMessage: string;
  currencies: Currency[];
  currency: Currency;
  isEdit: boolean;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.isEdit = false;
    this.refreshList();
  }

  refreshList() {
    this.currencyService.getCurrencies().subscribe(
      currencies => this.currencies = currencies, 
      error=> this.onError(error)
    );
  }

  readCurrency(rowId: number) {
    this.currencyService.getCurrency(rowId).subscribe(
      newValue => {
        this.currency = newValue;
        this.isEdit = true;
      },
      error => this.onError(error)
    );
  }

  onCancel(value: boolean) {
    this.isEdit = !value; 
  }

  onAdd() {
    this.currency = new Currency();
    this.isEdit = true;
  }

  onSave(value: Currency) {
    this.currencyService.updateCurrency(value).subscribe(
      success => {
        this.isEdit = false;     
        this.refreshList();
      },
      error => this.onError(error)
    );
  }

  onEdit(event: Event, rowId: number) {
    this.readCurrency(rowId);
  }

  onDelete(event: Event, rowId: number) {
    var ret: boolean;
    ret = confirm("Are you sure to delete record ?");
    if(ret == true) {
      this.currencyService.deleteCurrency(rowId).subscribe(
        success => this.refreshList(),
        error => this.onError(error)    
      )
    }
  }

  onError(errorMsg: string) {
    this.errorMessage = errorMsg;
  }

  log(msg: string, val?: any) {
    console.log(msg);
    console.log(val);
  }
}
