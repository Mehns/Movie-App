import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SearchComponent} from './components/search/search.component';
import {MovieComponent} from './components/movie/movie.component';
import {FavoriteComponent} from './components/favorite/favorite.component';
import {HistoryComponent} from './components/history/history.component';


const routes: Routes = [
  { path: 'movie/:id', component: MovieComponent },
  { path: 'search', component: SearchComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'history', component: HistoryComponent },
  { path: '**', redirectTo: '/search' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
