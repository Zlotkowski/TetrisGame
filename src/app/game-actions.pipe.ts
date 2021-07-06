import { Pipe, PipeTransform } from '@angular/core';
import { GameHistory } from './game-engine/game-engine.component';

@Pipe({
  name: 'gameActions',
  pure: false,
})
export class GameActionsPipe implements PipeTransform {
  compareNumbers(a, b) {
    return b.time - a.time;
  }
  transform(time: Array<GameHistory>, condition: string) {
    let filteredArray = time.sort(this.compareNumbers).slice(0, 8);
    if (condition === 'Older') {
      filteredArray = filteredArray.reverse();
    }
    return filteredArray;
  }
}
