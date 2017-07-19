import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ICurrency } from './currency';

@Injectable()
export class CurrencyService {
  currencyUrl: string = "/api/currency";

  constructor(private _http: Http) { }

  /**
   * Get list of currencies
   */
  public getCurrencies() : Observable<ICurrency[]> {
    console.log("Subscribe to getCurrencies");

    return this._http.get(this.currencyUrl)
      .map((response: Response) => <ICurrency[]>response.json() )
//      .do(data => console.log('Received ' + JSON.stringify(data)))
      .catch(this.handleError);
  } 

  /**
   * Update a currency record
   */
  public updateCurrency(currency: ICurrency) {
    console.log(currency);
  }


  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Severe error');
  }

}
