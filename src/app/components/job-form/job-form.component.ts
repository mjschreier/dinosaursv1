import { Component, OnInit } from '@angular/core';
import { JobListComponent } from '../job-list/job-list.component';
import { Listing } from '../../models/Listing';
import { ListService } from "../../services/list.service";

@Component({
  selector: "app-job-form",
  templateUrl: "./job-form.component.html",
  styleUrls: ["./job-form.component.css"]
})
export class JobFormComponent implements OnInit {
  data: Listing = {
    id: this._listService.listingsQuantity + 1,
    title: "",
    description: "",
    pay: "",
    interested: []
  };

  constructor(private _listService: ListService) {}

  ngOnInit() {}

  onSubmit(formData) {
    this._listService.addListing(formData.value);
    formData.reset();
  }
}
