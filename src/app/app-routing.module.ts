import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchResultComponent} from "./searchResult/searchResult.component";
import {DocumentComponent} from "./document/document.component";
import {SearchFormComponent} from "./searchForm/searchForm.component";
import {StatisticsComponent} from "./statistics/statistics.component";

const routes: Routes = [
  {path: 'search', component: SearchFormComponent},
  {path: 'result', component: SearchResultComponent},
  {path: 'document', component: DocumentComponent},
  {path: 'stats', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
