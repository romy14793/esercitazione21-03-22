import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';

//inseriamo nell'NgModule la nostra section-header
@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class SharedModule {}
