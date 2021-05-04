import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player_Score } from './definitions';

@Injectable({
  providedIn: 'root',
})
export class PlayerScoreService {
  constructor(private _http: HttpClient) {}

  public getPlayerScore(): Observable<Array<Player_Score>> {
    const URL = 'http://tetris.chrum.it/scores';
    const headers = new HttpHeaders({
      accept: 'application/json',
    });
    const options = { headers };
    return this._http.get<Array<Player_Score>>(URL, options);
  }
}
