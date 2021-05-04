import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Player_Data } from 'src/app/definitions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css'],
})
export class PlayerFormComponent implements OnInit {
  @Output() submit = new EventEmitter<Player_Data>();

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  submitForm(form: FormGroup) {
    this.submit.emit(form.value);
    console.log(form.value);
    this._router.navigate(['/game-engine']);
  }
}
