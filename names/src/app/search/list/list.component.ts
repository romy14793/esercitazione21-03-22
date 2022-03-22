import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Names } from 'src/app/models/Names';
import { SearchService } from 'src/app/shared/search.service';

@Component({
  selector: 'names-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() deleted!: boolean;
  date = new Date();
  receivedName: Names[] = [];
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.subject.subscribe((data) => {
      this.receivedName = data;
      let jsonData = JSON.stringify(this.receivedName);
      localStorage.setItem('name', jsonData);
    });
  }
  ngOnChanges(): void {
    this.receivedName = [];
  }
  ngOnDestroy(): void {}

  deleteName(index: number) {
    this.receivedName.splice(index, 1);
  }
}
