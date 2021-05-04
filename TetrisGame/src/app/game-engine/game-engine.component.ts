import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-engine',
  templateUrl: './game-engine.component.html',
  styleUrls: ['./game-engine.component.css'],
})
export class GameEngineComponent {
  constructor(private _router: Router) {}
  changeClick(): void {
    this._router.navigate(['/start-page']);
  }
}
