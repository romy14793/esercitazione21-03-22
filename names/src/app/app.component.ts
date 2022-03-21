import { Component } from '@angular/core';
import { Names } from './models/Names';

@Component({
  selector: 'names-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nameFromForm!: Names;
  title = 'names';
  sendName(name: Names) {
    this.nameFromForm = name;
  }
}
