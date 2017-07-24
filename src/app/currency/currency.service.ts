import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Currency } from './currency';

@Injectable()
export class CurrencyService {
  currencyUrl: string = "/api/currency";

  constructor(private http: HttpClient) { }

  /**
   * Get list of currencies
   */
  public getCurrencies(): Observable<Currency[]> {
    return this.http.get(this.currencyUrl)
      .map(data => <Currency[]>data)
      .do(console.log)
      .catch(this.handleError);
  }

  public deleteCurrency(rowId: number) {
    var key: string = `${rowId}`;
    const params = new HttpParams().set("rowid", key);

    this.http.delete(this.currencyUrl, { params }).subscribe(
      (res) => console.log(`Deleted ${res} rows.`),
      this.handleError
    );
  }

  /**
   * Update or Add a currency record
   */
  public updateCurrency(currency: Currency) {
    this.http.post(this.currencyUrl, currency).subscribe(
      (val) => console.log("POST call successful value returned in body", val),
      this.handleError);
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Severe error');
  }


}
