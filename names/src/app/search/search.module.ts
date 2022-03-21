import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';

//inseriamo nell'NgModule la nostra section-header
@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [ReactiveFormsModule],
  exports: [FormComponent, ListComponent],
})
export class SearchModule {}
