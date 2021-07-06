import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

export interface Scores {
  name: string;
  score: number;
}

export interface serverFeedback {
  decision: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiScoreService {
  constructor(private _http: HttpClient, private _storage: StorageService) {}
  public id: string;
  getScores(): Observable<Array<Scores>> {
    const httpOptions = {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
    };
    const URL = `http://tetris.chrum.it/scores`;
    return this._http.get<Array<Scores>>(URL, httpOptions);
  }

  checkToken(): Observable<serverFeedback> {
    this.id = this._storage.passPlayerInfo().id;
    const httpOptions = {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
      'auth-token': this.id.toString(),
    };
    const URL = `http://tetris.chrum.it/check-token`;
    return this._http.post<serverFeedback>(URL, httpOptions);
  }

  postScores(name: string, score): Observable<serverFeedback> {
    this.id = this._storage.passPlayerInfo().id;
    const httpOptions = {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
      name: name,
      score: score,
    };
    const URL = `http://tetris.chrum.it/scores`;
    return this._http.post<serverFeedback>(URL, httpOptions);
  }
}
