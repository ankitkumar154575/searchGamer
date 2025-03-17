import { Component } from '@angular/core';

@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.component.html',
  styleUrls: ['./view-search.component.css']
})
export class ViewSearchComponent {
  isBulkRequest: boolean = false;  // Default to Single Request

  constructor() {}

  toggleRequest(isBulk: boolean) {
    this.isBulkRequest = isBulk;
  }
}
