import { Component, OnInit, Input } from '@angular/core';
import { IgnApiService } from '../services/ign-api.service';
import { IgnResponse } from '../ign-response';

@Component({
  selector: 'app-article-row',
  templateUrl: './article-row.component.html',
  styleUrls: ['./article-row.component.css'],
  providers: [IgnApiService]
})
export class ArticleRowComponent implements OnInit {
  @Input() articleData: IgnResponse;
  errorMessage: string;

  constructor(private _ignService: IgnApiService) { }

  ngOnInit() {
    this.getArticleDetails("top-headlines");
  }

  getArticleDetails(context: string): boolean {
    this._ignService.getArticleData(context).subscribe(articleData => {
      this.articleData = articleData;
      console.log('getArticleData: ' + this.articleData);
    },
      error => this.errorMessage = <any>error);
    return false;
  }
}
