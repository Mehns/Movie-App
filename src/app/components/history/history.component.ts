import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {HistoryService} from '../../shared/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: any[];
  constructor(private historyService: HistoryService, private router: Router) { }

  ngOnInit() {
    this.loadHistory();
  }

  loadHistory(): void {
    this.history = this.historyService.getHistory();
  }

  clearHistory(): void {
    this.historyService.clearHistory();
    this.loadHistory();
  }

  selectMovie(id: string) {
    console.log('id:', id);
    // this.historyService.saveMovie(id);
    this.router.navigate(['/movie', id]);
  }

}
