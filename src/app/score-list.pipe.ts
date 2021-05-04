import { Pipe, PipeTransform } from '@angular/core';
import { Player_Score } from 'src/app/definitions';

@Pipe({
  name: 'scoreList',
})
export class ScoreListPipe implements PipeTransform {
  transform(
    values: Array<Player_Score>,
    filterChoose: string = 'Higest score'
  ): Array<Player_Score> {
    if (!values) {
      return values;
    }

    if (filterChoose === 'Higest score') {
      return values.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });
    }

    if (filterChoose === 'Lower score') {
      return values.sort((a, b) => {
        if (a.score > b.score) {
          return 1;
        } else {
          return -1;
        }
      });
    }
  }
}
