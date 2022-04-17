import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { NesModule } from 'ngx-nes-css';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollapsableModule } from './collapsable';
import { DialogModule } from './dialog';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CollapsableModule,
    DialogModule,
    FormsModule,
    HttpClientModule,
    NesModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
