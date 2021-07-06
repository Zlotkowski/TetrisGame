import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { withLatestFrom } from 'rxjs/operators';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css'],
})
export class PlayerFormComponent {
  @Output() passPlayerData = new EventEmitter();

  constructor(public fb: FormBuilder, private _storage: StorageService) {
    this.playerInfo = _storage.getInfoFromLocalStorage();
    this.buttonColor =
      this.playerInfo.color === 'black-and-white' ? 'white' : '#4caf50';
    if (this.playerInfo) {
      this.playerForm.patchValue({
        playerName: this.playerInfo.name,
        themeColor: this.playerInfo.color,
      });
    }

    this.playerForm.get('themeColor').valueChanges.subscribe((color) => {
      if (color === 'green') {
        this.buttonColor = '#4caf50';
      } else {
        this.buttonColor = 'white';
      }
    });
  }
  public playerForm = this.fb.group({
    playerName: ['', [Validators.required, Validators.minLength(5)]],
    playerId: [
      '',
      [Validators.required, Validators.min(1000), Validators.max(9999)],
    ],
    themeColor: ['green'],
  });

  private playerInfo = { name: '', id: '', color: 'green' };
  public buttonColor;
}
