import { Component } from '@angular/core';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.css'],
})
export class GameActionsComponent {
  public gameActionHistory = [];
  public autoUpdateScories: boolean = true;
  public scoreFilterChoose: string = 'Latest';

  constructor(private _storage: StorageService) {
    this.gameActionHistory = this._storage.passLog();
  }

  ngOnInit(): void {}
}
