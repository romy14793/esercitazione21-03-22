import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Names } from 'src/app/models/Names';
import { SearchService } from 'src/app/shared/search.service';

@Component({
  selector: 'names-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnChanges {
  @Input() deleted!: boolean;
  receivedName: Names[] = [];
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.subject.subscribe((data) => (this.receivedName = data));
  }
  ngOnChanges(): void {
    if (this.deleted == true) {
      this.receivedName = [];
      console.log('changes');
    }
  }

  deleteName(index: number) {
    this.receivedName.splice(index, 1);
  }
}
