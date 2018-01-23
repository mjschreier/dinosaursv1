import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Listing } from '../models/Listing';

@Injectable()
export class ListService {
  listUrl: string = '../../assets/data/listings.json'

  constructor(private _http: HttpClient) { }

  getList(): Observable<Listing[]> {
    return this._http.get<Listing[]>(this.listUrl)
  }

}
