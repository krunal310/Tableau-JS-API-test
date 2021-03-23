import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableauModule } from 'ngx-tableau';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableauModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
