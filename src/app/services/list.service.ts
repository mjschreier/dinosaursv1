import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Listing } from '../models/Listing';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class ListService {
  listings: Listing[];
  listingsQuantity: number = 0;
  listUrl: string = "../../assets/data/listings.json";
  public _newListingSubject = new Subject<Listing>();

  constructor(private _http: HttpClient) {
    this.initializeListService();
  }

  initializeListService() {
    this.getList().subscribe(listings => {
      this.listings = listings;
      this.setListingsQuantity();
    });
  }

  getList(): Observable<Listing[]> {
    return this._http.get<Listing[]>(this.listUrl);
  }

  addListing(submission: Listing) {
    this._newListingSubject.next(submission);
    this.setListingsQuantity();
  }

  setListingsQuantity() {
    this.listingsQuantity = this.listings.length;
  }
}
