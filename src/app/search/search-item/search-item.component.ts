import { Component, Input } from '@angular/core';
import { SearchItem } from '../search-item.model';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [DatePipe],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
})
export class SearchItemComponent {
  @Input() item: SearchItem;

  constructor(private datePipe: DatePipe, private router: Router) {
    this.item = {} as SearchItem;
  }

  formatPublishedDate(): string {
    if (this.item.snippet.publishedAt) {
      return (
        this.datePipe.transform(this.item.snippet.publishedAt, 'medium') || ''
      );
    }
    return '';
  }

  getBorderColor(publicationDate: string): string {
    const date = new Date(publicationDate);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
    );

    if (diffInDays > 180) {
      return 'red';
    } else if (diffInDays > 30) {
      return 'yellow';
    } else if (diffInDays > 7) {
      return 'green';
    } else {
      return 'blue';
    }
  }

  learnMore() {
    this.router.navigate(['/detail', this.item.id]);
  }
}
