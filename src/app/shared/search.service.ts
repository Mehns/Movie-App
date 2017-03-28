import { Injectable } from '@angular/core';
import {IMoviePreview, OmdbService} from './omdb.service';
import {Router} from '@angular/router';


@Injectable()
export class SearchService {
  searchStr: string;
  searchResult: any;
  resultCache: any;

  constructor( private omdb: OmdbService, private router: Router) { }


  searchMovie(searchStr: string): IMoviePreview {
    this.searchStr = searchStr;
    if (this.searchStr.length !== 0) {
      this.omdb.searchMovie(this.searchStr)
        .subscribe(res => {
          console.log(res);
          this.searchResult = res;
        });
    } else {
      this.searchResult = null;
    }
    return this.searchResult;
  }

  getSearchResults(): IMoviePreview {
    return this.searchResult;
  }

  saveCache(result: any): void {
    this.resultCache = result;
  }

  getCache(): any {
    console.log("Get cache: " + this.resultCache);
    return this.resultCache;
  }

}
