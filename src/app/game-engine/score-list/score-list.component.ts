import { Component, OnInit } from '@angular/core';
import { Players_Score } from 'src/app/definitions';
import { ApiScoreService } from '../../api-score.service';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css'],
})
export class ScoreListComponent implements OnInit {
  public playerScoreData: Array<Players_Score> = [];
  public autoUpdateScores: boolean = true;
  public scoreFilterChoose: string = 'Higest score';

  constructor(private PlayerScore: ApiScoreService) {
    this.PlayerScore.getScores().subscribe((result: Players_Score[]) => {
      this.playerScoreData = result;
    });
  }

  ngOnInit(): void {}
}
