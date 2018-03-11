export class DocumentRequest {
  titleTerms: string[];
  textTerms: string[];
  keywordTerms: string[];
  authorTerms: string[];
  fromDate: number;
  tillDate: number;
  source: string[];
  limit: number;
}
