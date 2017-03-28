import { Component, OnInit } from '@angular/core';
import {FavoriteService} from '../../shared/favorite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favorites: any[];

  constructor(private favoriteService: FavoriteService, private router: Router) { }

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = this.favoriteService.getFavorites();
  }

  deleteFavorite(id: string): void {
    this.favoriteService.deleteFavorite(id);
    this.loadFavorites();
  }

  clearFavorites(): void {
    this.favoriteService.clearFavorites();
    this.loadFavorites();
  }

  selectMovie(id: string) {
    console.log('id:', id);
    // this.historyService.saveMovie(id);
    this.router.navigate(['/movie', id]);
  }

}
