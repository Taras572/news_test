import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsListComponent } from './pages/news-list/news-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test_news';
}
