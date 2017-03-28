import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../shared/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  searchStr: string;

  constructor( private searchService: SearchService, private router: Router) { }

  ngOnInit() {
  }

  searchMovie(): void {
    this.searchService.searchMovie(this.searchStr);

  }

}
