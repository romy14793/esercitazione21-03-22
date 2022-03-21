import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/navbar/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchModule } from './search/search.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, HttpClientModule, SearchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
