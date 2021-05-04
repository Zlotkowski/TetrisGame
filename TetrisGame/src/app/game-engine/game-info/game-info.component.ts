import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player_Data } from 'src/app/definitions';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css'],
})
export class GameInfoComponent implements OnInit {
  @Input() playerData: Player_Data;
  constructor() {}

  ngOnInit(): void {}

  public player: Player_Data;

  public onFormSubmit(playerData) {
    this.player = playerData;
  }
}
