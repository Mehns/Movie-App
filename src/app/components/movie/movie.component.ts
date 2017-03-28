import { Component, OnInit } from '@angular/core';
import { IMovie, OmdbService } from '../../shared/omdb.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HistoryService} from "../../shared/history.service";
import {FavoriteService} from "../../shared/favorite.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [OmdbService]
})
export class MovieComponent implements OnInit {

  id: string;
  movie: IMovie;
  favorite: boolean;
  private sub: any;

  constructor(
    private omdbService: OmdbService,
    private historyService: HistoryService,
    private favoriteService: FavoriteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.id = params['id'];
        this.omdbService.getMovie(this.id)
          .subscribe(res => {
            this.movie = res;
            console.log("res: " + res);
            console.log("id: " + this.id);
            this.historyService.saveMovie(res);
            this.favorite = this.favoriteService.isFavorite(this.id);
          });
      });
  }

  toggleFavorite(): void {
    this.favorite = !this.favorite;
    if (this.favorite) {
      this.favoriteService.saveFavorite(this.movie);
    } else {
      this.favoriteService.deleteFavorite(this.id);
    }
  }

}
