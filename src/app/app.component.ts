import { Component } from '@angular/core';
import { CurrencyService } from "./currency/currency.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ CurrencyService ]
})
export class AppComponent {
  title = 'app';
}
