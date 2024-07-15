import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';
  searchQuery: string = '';
  filterQuery: string = '';
  sortDateAscending: boolean | null = null;
  sortViewsAscending: boolean | null = null;

  onSearchQuery(query: string) {
    this.searchQuery = query;
  }

  onFilterQuery(query: string) {
    this.filterQuery = query;
  }

  onSortByDate(ascending: boolean) {
    this.sortDateAscending = ascending;
  }

  onSortByViews(ascending: boolean) {
    this.sortViewsAscending = ascending;
  }
}
