import { Component } from '@angular/core';
import { CurrencyService } from "./currency/currency.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CurrencyService ]
})
export class AppComponent {
  title = 'app';
}
