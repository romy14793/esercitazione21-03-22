import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { Names } from 'src/app/models/Names';
import { SearchService } from 'src/app/shared/search.service';
@Component({
  selector: 'names-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  name!: Names;
  arrayName: Names[] = [];
  constructor(private fb: FormBuilder, private searchService: SearchService) {}
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(1)]],
  });

  ngOnInit(): void {}
  onSubmit() {
    this.searchService
      .getData(this.form.get('name')?.value)
      .subscribe((response) => {
        this.name = response as Names;
        this.arrayName.push(this.name);
        this.searchService.subject.next(this.arrayName);
      });
  }
}
