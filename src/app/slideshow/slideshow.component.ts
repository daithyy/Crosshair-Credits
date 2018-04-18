import { Component, OnInit, Input } from '@angular/core';
import { PolygonApiService } from '../services/polygon-api.service';
import { PolygonResponse } from '../polygon-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  providers: [PolygonApiService]
})
export class SlideshowComponent implements OnInit {
  @Input() articleData: PolygonResponse;
  errorMessage: string;

  constructor(private _polygonService: PolygonApiService) { }

  ngOnInit() {
    this.getArticleDetails("top-headlines");
  }

  getArticleDetails(context: string): boolean {
    this._polygonService.getArticleData(context).subscribe(articleData => {
      this.articleData = articleData;
      console.log('getArticleData: ' + this.articleData);
    },
      error => this.errorMessage = <any>error);
    return false;
  }
}
