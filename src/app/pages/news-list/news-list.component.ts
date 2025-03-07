import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../shared/service.service';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})
export class NewsListComponent implements OnInit {
  news: any[] = [];

  constructor(private newsService: ServiceService) { }

  ngOnInit(): void {
    this.loadNewsByCategory('general')
  }

  loadNewsByCategory(category: string): void {
    this.newsService.getNewsByCategory(category).subscribe(data => {
      this.news = data.articles;
    });
  }

  searchNews(keyword: string): void {
    this.newsService.searchNews(keyword).subscribe(data => {
      this.news = data.articles;
    });
  }
}
