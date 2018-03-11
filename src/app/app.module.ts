import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SearchResultComponent} from './searchResult/searchResult.component';
import {SearchService} from "./search.service";
import {DocumentComponent} from "./document/document.component";
import {SearchFormComponent} from "./searchForm/searchForm.component";
import {DlDateTimePickerDateModule} from "angular-bootstrap-datetimepicker";
import {StatisticService} from "./statistic.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DlDateTimePickerDateModule
  ],
  declarations: [
    AppComponent,
    SearchResultComponent,
    DocumentComponent,
    SearchFormComponent
  ],
  providers: [SearchService, StatisticService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
