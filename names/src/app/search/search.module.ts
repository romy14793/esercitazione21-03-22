import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//inseriamo nell'NgModule la nostra section-header
@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [ReactiveFormsModule, BrowserModule],
  exports: [FormComponent, ListComponent],
})
export class SearchModule {}
