import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ArticleRowComponent } from './article-row/article-row.component';
import { NavBarSearchComponent } from './nav-bar-search/nav-bar-search.component';
import { ArticleCommentsComponent } from './article-comments/article-comments.component';
import { SideBarStoryListComponent } from './side-bar-story-list/side-bar-story-list.component';
import { SideBarStoryRowComponent } from './side-bar-story-row/side-bar-story-row.component';
import { SideBarVideoComponent } from './side-bar-video/side-bar-video.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { PolygonApiService } from './services/polygon-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    SlideshowComponent,
    ArticleRowComponent,
    NavBarSearchComponent,
    ArticleCommentsComponent,
    SideBarStoryListComponent,
    SideBarStoryRowComponent,
    SideBarVideoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
