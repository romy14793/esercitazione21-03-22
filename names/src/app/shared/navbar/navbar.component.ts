import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'names-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  delete = true;
  @Output() deleteNames = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  deleteAllName() {
    this.deleteNames.emit(this.delete);
    this.delete = !this.delete;
  }
}
