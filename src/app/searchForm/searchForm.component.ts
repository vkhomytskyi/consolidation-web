import {Component} from '@angular/core';

import {DocumentRequest} from '../searchRequest';
import {SearchService} from "../search.service";
import {Document} from "../document";
import {SearchResult} from "../searchResult";
import {StatisticService} from "../statistic.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './searchForm.component.html',
  styleUrls: ['./searchForm.component.css']
})
export class SearchFormComponent {

  constructor(private searchService: SearchService, private statisticsService: StatisticService) {
  }

  documents: Document[];
  result: SearchResult;

  titleTerms: string;
  textTerms: string;
  keywordTerms: string;
  authorTerms: string;
  fromDate: string;
  tillDate: string;
  source: string[];
  fromId: number;
  limit: number;

  submitted = false;
  loading = false;
  selectedDocument = false;

  onSubmit() {
    this.loading = true;
    let model = new DocumentRequest();
    if (this.titleTerms)
      model.titleTerms = this.titleTerms.split(/\s/);
    if (this.textTerms)
      model.textTerms = this.textTerms.split(/\s/);
    if (this.authorTerms)
      model.authorTerms = this.authorTerms.split(/\s/);
    if (this.keywordTerms)
      model.keywordTerms = this.keywordTerms.split(/\s/);
    if (this.fromDate)
      model.fromDate = new Date(this.fromDate).getTime();
    if (this.tillDate)
      model.tillDate = new Date(this.tillDate).getTime();
    model.source = this.source;
    if (this.limit)
      model.limit = this.limit - 1;

    this.submitted = true;
    this.search(model);
  }

  search(request: DocumentRequest) {
    this.searchService.search(request)
      .subscribe(result => {
        this.loading = false;
        this.result = result;
        this.documents = result.documents;
      });
  }

  clearSearch() {
    this.documents = null;
    this.clearForm();
    this.submitted = false;
  }

  onDetails(event: boolean) {
    this.selectedDocument = event;
  }

  clearForm() {
    this.titleTerms = null;
    this.textTerms = null;
    this.keywordTerms = null;
    this.authorTerms = null;
    this.fromDate = null;
    this.tillDate = null;
    this.fromId = null;
    this.limit = null;
  }
}
