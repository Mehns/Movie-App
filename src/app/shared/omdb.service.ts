import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Injectable()
export class OmdbService {

  restRoot = 'http://www.omdbapi.com/?';

  constructor(private http: Http) { }

  searchMovie(str: string) {
    const url = `${this.restRoot}s=${str}`;
    return this.http.get(url)
      .map(res => res.json());
  }

  getMovie(id: string) {
    const url = `${this.restRoot}i=${id}&plot=full`;
    return this.http.get(url)
      .map(res => res.json());
  }
}

// omdb typings
export interface IOmdbResult {
  search: IMoviePreview[];
  totalResults: number;
}


export interface IMoviePreview {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}


export interface IMovie {
  title: string;
  year: number;
  imdbID: string;
  runtime: string;
  genre: string;
  director: string;
  actors: string;
  plot: string;
  imdbRating: number;
  poster: string;
}
