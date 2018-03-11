import {Document} from "./document";

export class SearchResult {
  totalRequested: number;
  totalCount: number;
  scopusRequested: number;
  scopusCount: number;
  rinzRequested: number;
  rinzCount: number;
  kpiRequested: number;
  kpiCount: number;
  documents: Document[];
}
