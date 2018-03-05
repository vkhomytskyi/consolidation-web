import {Document} from "./document";

export class SearchResult {
  totalCount: number;
  scopusCount: number;
  rinzCount: number;
  kpiCount: number;
  documents: Document[];
}
