import { Component, OnInit } from '@angular/core';
import { Listing } from '../../models/Listing';
import { ListService } from '../../services/list.service';

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ["./job-list.component.css"]
})
export class JobListComponent implements OnInit {
  listings: Listing[];

  constructor(private _listService: ListService) {}

  ngOnInit() {
    this._listService.getList().subscribe(listing => {
      this.listings = listing;
    })
    this._listService._newListingSubject.subscribe(submission => {
      this.listings.push(submission);
    })
  }

}
