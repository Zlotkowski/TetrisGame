import { Component, ViewChild } from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { ActivatedRoute } from '@angular/router';
import { ApiScoreService } from '../api-score.service';
import { YourScore } from '../definitions';
import { delay } from 'rxjs/operators';

export interface GameHistory {
  event?: string;
  time?: number;
}

@Component({
  selector: 'app-game-engine',
  templateUrl: './game-engine.component.html',
  styleUrls: ['./game-engine.component.css'],
})
export class GameEngineComponent {
  public playerInfo: { name: string; id: string };

  public orderNumber: number = 0;
  public logEntry: string;
  public lastAction: string = '';
  public gameActionHistory: Array<GameHistory>;
  public myScores: Array<YourScore>;

  public coreClass: string;

  public points: number = 0;
  public status: string = 'not started';
  public gameTime: number = 0;
  public interval: any;

  public isEndGame: boolean = false;
  public isGame: boolean = false;

  @ViewChild('game')
  private _tetris: TetrisCoreComponent;

  public bw = false;
  public moveLeft = false;
  public moveDown = false;
  public moveRight = false;
  public rotate = false;
  public start = false;
  public stop = false;
  public reset = false;

  constructor(
    private _hotkeysService: HotkeysService,
    private _router: Router,
    private _storage: StorageService,
    private _scores: ApiScoreService,
    private _route: ActivatedRoute
  ) {
    this._addHotkeys();
    this.playerInfo = this._storage.passPlayerInfo();
    this.gameActionHistory = this._storage.passLog();
    this.myScores = this._storage.passScores();
    this._route.params.subscribe((params) => {
      this.coreClass = params.color;
    });
  }

  public onLineCleared() {
    this.points = this.points + 100;
    this.gameActionHistory.push({
      event: 'Line cleared',
      time: this.gameTime,
    });
  }

  public onGameOver() {
    this.pauseTimer();
    this.isEndGame = true;
  }

  public onRotateButtonPressed() {
    this._tetris.actionRotate();
  }

  private _addHotkeys() {
    this._hotkeysService.add(
      new Hotkey('s', (event: KeyboardEvent): boolean => {
        this._tetris.actionStart();
        this.startTimer();
        this.status = 'Game start';

        this.gameActionHistory.push({
          event: 'Game start',
          time: this.gameTime,
        });

        return false; // Prevent bubbling
      })
    );

    this._hotkeysService.add(
      new Hotkey('p', (event: KeyboardEvent): boolean => {
        this._tetris.actionStop();
        this.pauseTimer();
        this.status = 'Game paused';

        this.gameActionHistory.push({
          event: 'Game stop',
          time: this.gameTime,
        });

        return false; // Prevent bubbling
      })
    );

    this._hotkeysService.add(
      new Hotkey('q', (event: KeyboardEvent): boolean => {
        this._tetris.actionReset();

        this.resetTimer();

        this.gameActionHistory.push({
          event: 'Game reset',
          time: this.gameTime,
        });

        return false; // Prevent bubbling
      })
    );

    this._hotkeysService.add(
      new Hotkey('r', (event: KeyboardEvent): boolean => {
        this._tetris.actionRotate();

        return false; // Prevent bubbling
      })
    );

    this._hotkeysService.add(
      new Hotkey('left', (event: KeyboardEvent): boolean => {
        this._tetris.actionLeft();

        return false; // Prevent bubbling
      })
    );

    this._hotkeysService.add(
      new Hotkey('down', (event: KeyboardEvent): boolean => {
        this._tetris.actionDown();

        return false; // Prevent bubbling
      })
    );

    this._hotkeysService.add(
      new Hotkey('right', (event: KeyboardEvent): boolean => {
        this._tetris.actionRight();

        return false; // Prevent bubbling
      })
    );
  }

  startTimer() {
    this.pauseTimer();
    this.interval = setInterval(() => {
      this.gameTime++;
    }, 1000);
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
  resetTimer() {
    this.gameTime = 0;
  }

  changeClick(): void {
    this._router.navigate(['/start-page']);
  }

  public saveScore() {
    this.addToMyScores(this.playerInfo, this.points);
    this._scores
      .postScores(this.playerInfo.name, this.points)
      .subscribe((result) => {
        console.log(result);
      });
  }

  public addToMyScores(givenInfo: YourScore, points: number) {
    this.myScores.push({
      name: givenInfo.name,
      id: givenInfo.id,
      points: points,
    });
    this._storage.takeMyScores(this.myScores);
  }

  ngOnInit(): void {}
}
