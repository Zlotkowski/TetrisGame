// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-controler',
//   templateUrl: './controler.component.html',
//   styleUrls: ['./controler.component.css']
// })
// export class ControlerComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css'],
})
export class ControllerComponent implements OnInit {
  gameStatus: string;
  scorePlayer: number = 0;

  time: number = 0;
  interval;

  // gameData: Array<GameData> = [];

  @Output() gameStatusMessage = new EventEmitter();
  @Output() gameDataMessage = new EventEmitter();

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

  constructor(private _hotkeysService: HotkeysService) {
    this._addHotkeys();
  }

  public onLineCleared() {
    // this.scorePlayer = this.scorePlayer + 100;
    // this.gameData.push({
    //   event: 'Line cleared',
    //   time: this.time,
    // });
  }

  public onGameOver() {
    this.pauseTimer();
    alert('game over');
  }

  public onRotateButtonPressed() {
    this._tetris.actionRotate();
  }

  private _addHotkeys() {
    this._hotkeysService.add(
      new Hotkey('s', (event: KeyboardEvent): boolean => {
        this._tetris.actionStart();
        this.gameStatusMessage.emit('Game start');

        // this.gameData.push({
        //   event: 'Game start',
        //   time: this.time,
        // });

        // this.gameDataMessage.emit(this.gameData);
        this.startTimer();
        return false; // Prevent bubbling
      })
    );

    this._hotkeysService.add(
      new Hotkey('p', (event: KeyboardEvent): boolean => {
        this._tetris.actionStop();
        this.gameStatusMessage.emit('Game stop');

        // this.gameData.push({
        //   event: 'Game stop',
        //   time: this.time,
        // });

        this.pauseTimer();
        return false; // Prevent bubbling
      })
    );

    this._hotkeysService.add(
      new Hotkey('q', (event: KeyboardEvent): boolean => {
        this._tetris.actionReset();

        // this.gameData.push({
        //   event: 'Game reset',
        //   time: this.time,
        // });

        return false; // Prevent bubbling
      })
    );

    this._hotkeysService.add(
      new Hotkey('r', (event: KeyboardEvent): boolean => {
        this._tetris.actionRotate();

        // this.gameData.push({
        //   event: 'Game rotate',
        //   time: this.time,
        // });

        return false; // Prevent bubbling
      })
    );

    this._hotkeysService.add(
      new Hotkey('left', (event: KeyboardEvent): boolean => {
        this._tetris.actionLeft();

        // this.gameData.push({
        //   event: 'Left',
        //   time: this.time,
        // });

        return false; // Prevent bubbling
      })
    );

    this._hotkeysService.add(
      new Hotkey('down', (event: KeyboardEvent): boolean => {
        this._tetris.actionDown();

        // this.gameData.push({
        //   event: 'Down',
        //   time: this.time,
        // });

        return false; // Prevent bubbling
      })
    );

    this._hotkeysService.add(
      new Hotkey('right', (event: KeyboardEvent): boolean => {
        this._tetris.actionRight();

        // this.gameData.push({
        //   event: 'Right',
        //   time: this.time,
        // });

        return false; // Prevent bubbling
      })
    );
  }

  private startTimer() {
    this.interval = setInterval(() => {
      this.time++;
    }, 1000);
  }

  private pauseTimer() {
    clearInterval(this.interval);
  }
  ngOnInit(): void {}
}
