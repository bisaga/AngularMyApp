import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgModel, NgForm} from '@angular/forms';
import { Currency } from "app/currency/currency";

@Component({
  selector: 'app-currency-edit',
  templateUrl: './currency-edit.component.html'
})
export class CurrencyEditComponent {
  @Input()  currency: Currency;
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>(); 
  @Output() save: EventEmitter<Currency> = new EventEmitter<Currency>(); 

  onCancel() {
    this.cancel.emit(true);
  }

  onSubmit(value: Currency) {
    this.save.emit(value);
  }
}
