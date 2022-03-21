import { Component, Input, OnInit } from '@angular/core';
import { Names } from 'src/app/models/Names';

@Component({
  selector: 'names-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() nameFromForm!: Names;
  constructor() {}

  ngOnInit(): void {}
}
