import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilteringCriteriaComponent } from '../filtering-criteria/filtering-criteria.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, FilteringCriteriaComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() searchQueryEvent = new EventEmitter<string>();
  @Output() filterQueryEvent = new EventEmitter<string>();
  @Output() sortByDateEvent = new EventEmitter<boolean>();
  @Output() sortByViewsEvent = new EventEmitter<boolean>();

  searchQuery: string = '';
  showFilteringCriteria = false;

  search() {
    this.searchQueryEvent.emit(this.searchQuery);
  }

  toggleSettings() {
    console.log('Toggle settings');
  }

  toggleFilteringCriteria() {
    this.showFilteringCriteria = !this.showFilteringCriteria;
  }

  onFilterQuery(query: string) {
    this.filterQueryEvent.emit(query);
  }

  onSortByDate(ascending: boolean) {
    this.sortByDateEvent.emit(ascending);
  }

  onSortByViews(ascending: boolean) {
    this.sortByViewsEvent.emit(ascending);
  }
}
