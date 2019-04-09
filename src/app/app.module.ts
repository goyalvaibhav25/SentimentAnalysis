import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '../../node_modules/@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntentComponent } from './intent/intent.component';
import { KeywordComponent } from './keyword/keyword.component';
import { LiveChatComponent } from './live-chat/live-chat.component';
import { LiveGraphComponent } from './live-graph/live-graph.component';
import { OverallAnalysisComponent } from './overall-analysis/overall-analysis.component';
import { ApiService } from './api.service';
import { DummyComponent } from './dummy/dummy.component';
import {OpenLinkInNewWindowDirective} from 'src/app/olinw.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IntentComponent,
    KeywordComponent,
    LiveChatComponent,
    LiveGraphComponent,
    OverallAnalysisComponent,
    DummyComponent,
    OpenLinkInNewWindowDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
