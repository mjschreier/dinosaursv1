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
    this._listService.getList().subscribe(listings => {
      this.listings = listings
    })
  }
}
