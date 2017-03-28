import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SearchComponent } from './components/search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './components/movie/movie.component';
import { HistoryComponent } from './components/history/history.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import {FavoriteService} from './shared/favorite.service';
import {HistoryService} from './shared/history.service';
import {SearchService} from './shared/search.service';
import {OmdbService} from './shared/omdb.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TopnavComponent,
    SearchComponent,
    MovieComponent,
    HistoryComponent,
    FavoriteComponent
  ],
  providers: [ FavoriteService, HistoryService, SearchService, OmdbService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
