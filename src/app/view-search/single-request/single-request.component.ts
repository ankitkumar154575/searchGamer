import { Component } from '@angular/core';

@Component({
  selector: 'app-single-request',
  templateUrl: './single-request.component.html',
  styleUrls: ['./single-request.component.css']
})
export class SingleRequestComponent {
  singleData = {
    businessUnit: '',
    products: '',
    startDate: '',
    endDate: '',
    accountNumber: '',
    clientId: '',
    clientName: '',
    commentText: '',
    address: '',
    requestName: '',
    associatedCase: ''
  };

  clearForm() {
    this.singleData = {
      businessUnit: '',
      products: '',
      startDate: '',
      endDate: '',
      accountNumber: '',
      clientId: '',
      clientName: '',
      commentText: '',
      address: '',
      requestName: '',
      associatedCase: ''
    };
  }
}
