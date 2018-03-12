import {Component} from '@angular/core';

import {DocumentRequest} from '../searchRequest';
import {SearchService} from "../search.service";
import {Document} from "../document";
import {SearchResult} from "../searchResult";
import {StatisticService} from "../statistic.service";
import {SearchStatistic} from "../SearchStatistic";

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

  statistics: SearchStatistic[];

  titleTerms: string;
  textTerms: string;
  keywordTerms: string;
  authorTerms: string;
  fromDate: string;
  tillDate: string;
  source: string[];
  fromId: number;
  limit: number;
  iterations: number;

  submitted = false;
  loading = false;
  selectedDocument = false;

  buildRequest(): DocumentRequest {
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
      model.limit = this.limit;
    if (this.iterations)
      model.iterations = this.iterations;
    return model;
  }

  onSubmit() {
    this.loading = true;
    let model = this.buildRequest();
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
    this.statistics = null;
    this.clearForm();
    this.submitted = false;
  }

  onDetails(event: boolean) {
    this.selectedDocument = event;
  }

  onStatistics() {
    this.loading = true;
    let model = this.buildRequest();
    this.submitted = true;
    this.getStatistics(model);
  }

  getStatistics(request: DocumentRequest) {
    this.statisticsService.statistics(request)
      .subscribe(result => {
        this.loading = false;
        this.statistics = result;
      });
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
    this.iterations = null;
  }
}
