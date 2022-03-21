import { Component } from '@angular/core';
import { Names } from './models/Names';

@Component({
  selector: 'names-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  deleted!: boolean;
  nameFromForm!: Names;
  title = 'names';

  deleteNames(event: boolean) {
    this.deleted = event;
  }
}
