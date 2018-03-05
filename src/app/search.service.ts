import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {DocumentRequest} from "./searchRequest";
import {SearchResult} from "./searchResult";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class SearchService {

  private searchUrl = 'http://localhost:8080/search';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET heroes from the server */
  search(request: DocumentRequest): Observable<SearchResult> {
    return this.http.post<SearchResult>(this.searchUrl, request, httpOptions);
  }
}
