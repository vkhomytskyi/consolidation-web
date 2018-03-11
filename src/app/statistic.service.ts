import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {DocumentRequest} from "./searchRequest";
import {SearchResult} from "./searchResult";
import {SearchStatistic} from "./searchStatistic";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class StatisticService {

  private statisticsUrl = 'http://localhost:8080/statistics';

  constructor(private http: HttpClient) {
  }

  statistics(): Observable<SearchStatistic> {
    return this.http.get<SearchStatistic>(this.statisticsUrl, httpOptions);
  }
}
