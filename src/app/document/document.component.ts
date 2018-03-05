import {Component, Input} from '@angular/core';
import {Document} from "../document";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html'
})
export class DocumentComponent {
  @Input() document: Document;
}
