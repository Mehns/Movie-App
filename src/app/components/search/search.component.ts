import { Component, OnInit } from '@angular/core';
import { IMoviePreview, OmdbService } from '../../shared/omdb.service';
import {Router} from '@angular/router';
import {HistoryService} from '../../shared/history.service';
import {SearchService} from "../../shared/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [OmdbService]
})
export class SearchComponent implements OnInit {
  title = 'Search for Movies';
  searchStr: string;
  searchResult: any;

  constructor(private omdb: OmdbService, private searchService: SearchService, private router: Router) { }

  ngOnInit() {
    this.getSearchResults();
  }

  getSearchResults(): void {
    this.searchResult = this.searchService.getCache();
  }

/*  searchMovie() {
    this.searchResult = this.searchService.searchMovie(this.searchStr);
  }*/

  searchMovie() {
    if (this.searchStr.length !== 0) {
      this.omdb.searchMovie(this.searchStr)
        .subscribe(res => {
          console.log("results" + res);
          this.searchResult = res;
          this.searchService.saveCache(this.searchResult);
          // this.searchService.searchMovie(this.searchStr);
        });
    } else {
      this.searchResult = null;
    }
    console.log("results: " + this.searchResult);
    // this.searchService.saveCache(this.searchResult);
  }


  selectMovie(id: string) {
    this.router.navigate(['/movie', id]);
  }

}
