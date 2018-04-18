import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { PolygonResponse } from '../polygon-response';

@Injectable()
export class PolygonApiService {

  private _siteURL = "https://newsapi.org/v2/";
  //private _context = "top-headlines";
  private _source = "?sources=polygon";
  private _key = "&apiKey=695d21b8fd2742dea88e11d1299aaae1";

  constructor(private _http: HttpClient) { }

  getArticleData(context): Observable<PolygonResponse> {
    return this._http.get<PolygonResponse>(this._siteURL+context+this._source+this._key)
      .do(data => console.log('All : ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log('PolygonApiService: ' + err.message);
    return Observable.throw(err.message);
  }
}
