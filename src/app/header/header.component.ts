import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchQuery: string = '';

  search() {
    console.log('Search query:', this.searchQuery);
  }

  toggleSettings() {
    console.log('Toggle settings');
  }
}
