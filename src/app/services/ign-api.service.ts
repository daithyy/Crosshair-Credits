import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IgnResponse } from '../ign-response';

@Injectable()
export class IgnApiService {

  private _siteURL = "https://newsapi.org/v2/";
  //private _context = "top-headlines";
  private _source = "?sources=ign";
  private _key = "&apiKey=695d21b8fd2742dea88e11d1299aaae1";

  constructor(private _http: HttpClient) { }

  getArticleData(context): Observable<IgnResponse> {
    return this._http.get<IgnResponse>(this._siteURL+context+this._source+this._key)
      .do(data => console.log('All : ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log('IgnApiService: ' + err.message);
    return Observable.throw(err.message);
  }

}
