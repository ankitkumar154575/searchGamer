import { Component } from '@angular/core';

@Component({
  selector: 'app-bulk-request',
  templateUrl: './bulk-request.component.html',
  styleUrls: ['./bulk-request.component.css']
})
export class BulkRequestComponent {
  bulkData: any = { fileUpload: null };

  onFileSelected(event: any) {
    const file = event.target.files[0]; // Get the first file
    if (file) {
      this.bulkData.fileUpload = file;
      console.log('Selected file:', file.name);
    }
  }

  clearForm() {
    this.bulkData = { fileUpload: null };
    console.log('Form cleared');
  }
}
