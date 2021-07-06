import { Pipe, PipeTransform } from '@angular/core';
import { StorageService } from './storage.service';

@Pipe({
  name: 'scoreList',
})
export class ScoreListPipe implements PipeTransform {
  compareNumbers(a, b) {
    return b.score - a.score;
  }
  transform(scores: Array<StorageService>, condition: string) {
    let filteredArray = scores.sort(this.compareNumbers).slice(0, 10);
    if (condition === 'Lower score') {
      filteredArray = filteredArray.reverse();
    }
    return filteredArray;
  }
}
