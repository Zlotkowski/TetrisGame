import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../storage.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css'],
})
export class GameInfoComponent {
  @Input() playerInfo: {
    name: string;
    id: string;
    score: number;
    status: string;
    gameTime: number;
  };
}
