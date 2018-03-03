import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { SearchComponent }      from './search/search.component';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import {SearchService} from "./search.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    MessagesComponent
  ],
  providers: [ MessageService, SearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
