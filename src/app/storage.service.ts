import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private playerInfo = { name: '', id: '', color: 'default' };
  private logHistory = [];
  private myScores = [];

  setUserInfo(givenInfo: { name: string; id: string; color: string }) {
    localStorage.setItem('playerInfo', JSON.stringify(givenInfo));
  }

  getInfoFromLocalStorage() {
    let data = JSON.parse(localStorage.getItem('playerInfo'));
    if (data === null) {
      data = this.playerInfo;
    }
    return data;
  }
  resetLocalStorage() {
    localStorage.setItem('playerInfo', JSON.stringify(null));
  }

  passPlayerInfo() {
    this.playerInfo = this.getInfoFromLocalStorage();
    return this.playerInfo;
  }

  takeLog(givenLog) {
    this.logHistory = givenLog;
  }

  passLog() {
    return this.logHistory;
  }

  takeMyScores(givenScores) {
    this.myScores = givenScores;
  }
  passScores() {
    return this.myScores;
  }
}
