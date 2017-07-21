import { Component, OnInit } from '@angular/core';
import { ICurrency } from "app/currency/currency";
import { CurrencyService } from "app/currency/currency.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html'
})
export class CurrencyListComponent implements OnInit {
  title: string = 'Currency List';
  errorMessage: string;
  currencies: ICurrency[];
  isEditState: boolean;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
      this.isEditState = this.currencyService.isEdit();

      this.currencyService.getCurrencies()
      .subscribe(currencies => this.currencies = currencies, 
                  error => this.errorMessage = <any>error);
  }

  onAdd(event: Event) {
    //TODO: create Observable<boolean> and subscribe to changes !
    this.currencyService.setEdit(true);
    this.isEditState = this.currencyService.isEdit();
  }

  onEdit(event: Event, rowId: number) {
    alert(`Edit RowId:  ${rowId}`);
  }

  onDelete(event: Event, rowId: number) {
    alert(`Delete RowId: ${rowId}`);
  }



}
