import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Document} from "../document";
import {SearchResult} from "../searchResult";

@Component({
  selector: 'app-search-result',
  templateUrl: './searchResult.component.html'
})
export class SearchResultComponent {
  @Input()
  result: SearchResult;
  @Output()
  onSelected = new EventEmitter<boolean>();
  selectedDocument: Document;

  selectDocument(document: Document) {
    this.selectedDocument = document;
    this.onSelected.emit(true);
  }

  clearDocument() {
    this.selectedDocument = null;
    this.onSelected.emit(false);
  }
}
