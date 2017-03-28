import { Injectable } from '@angular/core';

@Injectable()
export class HistoryService {

  history: string[];
  historyLength = 5;
  // historyMovies: any[];
  historyMovies: any;
  searchTerm: string;

  constructor() {
    // localStorage.removeItem('movie-history');
    const localHistory = localStorage.getItem('movie-history');
    if (localHistory) {
      this.historyMovies = JSON.parse(localHistory);
    } else {
      this.historyMovies = {};
    }
  }

  /*saveMovie(movie: any) {
    this.historyMovies.push(movie);
    localStorage.setItem('movie-history', JSON.stringify(this.historyMovies));
    // console.log(`id: ${id}, history: ${this.history}`);
  }*/

  saveMovie(movie: any) {
    const id = movie.imdbID;
    if (this.historyMovies.hasOwnProperty(id)) {
      delete this.historyMovies[id];
      this.historyMovies[id] = movie;
    }
    this.historyMovies[id] = movie;

    // keep history to certain length
    if (Object.keys(this.historyMovies).length >= this.historyLength) {
      delete Object.keys(this.historyMovies)[Object.keys(this.historyMovies).length - 1];
    }

    localStorage.setItem('movie-history', JSON.stringify(this.historyMovies));
  }

  getHistory(): any[] {
    // return as reversed array
    const array = Object.keys(this.historyMovies).map(key => this.historyMovies[key]);
    console.log("array " + array);
    return array.reverse();
  }

  clearHistory(): void {
    this.historyMovies = {};
    localStorage.removeItem('movie-history');
  }

  setSearchTerm(term: string): void {
    this.searchTerm = term;
  }

  saveMovie2(id: string) {
    this.history.push(id);
    localStorage.setItem('movie-history', JSON.stringify(this.history));
    console.log(`id: ${id}, history: ${this.history}`);
  }

  getHistory2(): string[] {
    return this.history;
  }

}
