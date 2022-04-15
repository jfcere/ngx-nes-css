import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NesModule } from 'ngx-nes-css';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from './dialog';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DialogModule,
    FormsModule,
    NesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
