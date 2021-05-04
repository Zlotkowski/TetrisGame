import { Component, OnInit } from '@angular/core';
import { Player_Score } from 'src/app/definitions';
import { PlayerScoreService } from '../../player-score.service';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css'],
})
export class ScoreListComponent implements OnInit {
  public playerScoreData: Array<Player_Score>;

  avaibleScoreFilterChoose: Array<string> = ['Higest score', 'Lower score'];
  scoreFilterChoose: string;

  constructor(private PlayerScore: PlayerScoreService) {
    this.PlayerScore.getPlayerScore().subscribe((result: Player_Score[]) => {
      this.playerScoreData = result;
    });
  }

  ngOnInit(): void {}
}
