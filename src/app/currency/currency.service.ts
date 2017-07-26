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

  public getCurrency(rowId: number) {
    var url: string = `${this.currencyUrl}/${rowId}`;

    return this.http.get(url)
      .map(data => <Currency>data)
      .do(console.log)
      .catch(this.handleError);
  }


  public deleteCurrency(rowId: number): Observable<number> {
    var key: string = `${rowId}`;
    const params = new HttpParams().set("rowid", key);

    return <Observable<number>>this.http.delete(this.currencyUrl, { params });
  }

  /**
   * Update or Add a currency record
   */
  public updateCurrency(currency: Currency): Observable<Currency> {
    return < Observable<Currency>>this.http.post(this.currencyUrl, currency);
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Severe error');
  }


}
