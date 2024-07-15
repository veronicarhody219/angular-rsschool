import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtering-criteria',

  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss'],
})
export class FilteringCriteriaComponent {
  @Output() filterQuery = new EventEmitter<string>();
  @Output() sortByDate = new EventEmitter<boolean>();
  @Output() sortByViews = new EventEmitter<boolean>();

  query: string = '';
  dateAscending: boolean = true;
  viewsAscending: boolean = true;

  onFilter(query: string) {
    this.filterQuery.emit(query);
  }

  onSortByDate(ascending: boolean) {
    this.sortByDate.emit(ascending);
  }

  onSortByViews(ascending: boolean) {
    this.sortByViews.emit(ascending);
  }
}
