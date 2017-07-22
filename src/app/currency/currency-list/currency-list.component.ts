import { Component, OnInit } from '@angular/core';
import { ICurrency } from "app/currency/currency";
import { CurrencyService } from "app/currency/currency.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  providers: [ CurrencyService ]
})
export class CurrencyListComponent implements OnInit {
  title: string = 'Currency List';
  errorMessage: string;
  currencies: ICurrency[];
  isEdit: boolean;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
      this.isEdit = false;

      this.currencyService.getCurrencies()
      .subscribe(currencies => this.currencies = currencies, 
                  error => this.errorMessage = <any>error);
  }

  onChange(value: boolean) {
    console.log(`Closed : "${value}" is intercepted in parent component`);
    this.isEdit = !value; 
  }

  onAdd() {
    this.isEdit = true;
  }

  onEdit(event: Event, rowId: number) {
    this.isEdit = true;
    console.log(`Edit RowId:  ${rowId}`);
  }

  onDelete(event: Event, rowId: number) {
    console.log(`Delete RowId: ${rowId}`);
  }

}
