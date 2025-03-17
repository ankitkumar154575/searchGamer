import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ViewSearchComponent } from './view-search/view-search.component';
import { SingleRequestComponent } from './view-search/single-request/single-request.component';
import { BulkRequestComponent } from './view-search/bulk-request/bulk-request.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewSearchComponent,
    SingleRequestComponent,
    BulkRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
