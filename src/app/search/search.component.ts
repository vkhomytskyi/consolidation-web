import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {Document} from "../document";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  documents: Document[];

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    console.log("On init search");
    this.search();
  }

  search(): void {
    this.searchService.search(null)
      .subscribe(documents => this.documents = documents);
  }
}
