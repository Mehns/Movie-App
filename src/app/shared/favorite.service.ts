import { Injectable } from '@angular/core';

@Injectable()
export class FavoriteService {

  favoriteMovies: any;

  constructor() {
    // localStorage.removeItem('movie-history');
    // console.log("history "+ localStorage.getItem('movie-history'));
    const localFavorites = localStorage.getItem('movie-favorites');
    console.log("Local Favorites :" + localFavorites);
    if (localFavorites) {
      this.favoriteMovies = JSON.parse(localFavorites);
    } else {
      this.favoriteMovies = {};
    }
  }



  saveFavorite(movie: any) {
    const id = movie.imdbID;
    console.log("set favorite: "+id);
    if (this.favoriteMovies.hasOwnProperty(id)) {
      delete this.favoriteMovies[id];
      this.favoriteMovies[id] = movie;
    }
    this.favoriteMovies[id] = movie;
    localStorage.setItem('movie-favorites', JSON.stringify(this.favoriteMovies));
  }

  deleteFavorite(id: string) {
    if (this.favoriteMovies.hasOwnProperty(id)) {
      delete this.favoriteMovies[id];
      console.log("deleted favorite: "+id);
    }
  }

  isFavorite(id: string): boolean {
    return this.favoriteMovies.hasOwnProperty(id);
  }

  getFavorites(): any[] {
    // return as reversed array
    const array = Object.keys(this.favoriteMovies).map(key => this.favoriteMovies[key]);
    console.log("Favorites: " + array);
    return array.reverse();
  }

  clearFavorites(): void {
    this.favoriteMovies = {};
    localStorage.removeItem('movie-favorites');
  }

}
