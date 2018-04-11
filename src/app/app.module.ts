import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleRowComponent } from './article-row/article-row.component';
import { ArticleImageComponent } from './article-image/article-image.component';
import { NavBarSearchComponent } from './nav-bar-search/nav-bar-search.component';
import { ArticleCommentsComponent } from './article-comments/article-comments.component';
import { SideBarStoryListComponent } from './side-bar-story-list/side-bar-story-list.component';
import { SideBarStoryRowComponent } from './side-bar-story-row/side-bar-story-row.component';
import { SideBarVideoComponent } from './side-bar-video/side-bar-video.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    SlideshowComponent,
    ArticleListComponent,
    ArticleRowComponent,
    ArticleImageComponent,
    NavBarSearchComponent,
    ArticleCommentsComponent,
    SideBarStoryListComponent,
    SideBarStoryRowComponent,
    SideBarVideoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
