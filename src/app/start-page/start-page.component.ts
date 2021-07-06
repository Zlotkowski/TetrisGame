import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { ApiScoreService } from '../api-score.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
})
export class StartPageComponent {
  constructor(
    private _router: Router,
    private _storage: StorageService,
    private _scores: ApiScoreService
  ) {}

  postToken() {
    this._scores.checkToken().subscribe((result) => {
      console.log(result);
    });
  }

  openGame(playerInfo: { name: string; id: string; color: string }) {
    this._router.navigate(['/game-engine', playerInfo.color]);
    this._storage.setUserInfo({
      name: playerInfo.name,
      id: playerInfo.id,
      color: playerInfo.color,
    });
    this.postToken();
  }
}
