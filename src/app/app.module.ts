import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CurrencyListComponent } from './currency/currency-list/currency-list.component';
import { CurrencyEditComponent } from './currency/currency-edit/currency-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
    CurrencyEditComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
