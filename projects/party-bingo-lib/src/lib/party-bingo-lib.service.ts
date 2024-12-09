import { Injectable } from '@angular/core';
import { shuffle, to2D } from '@12luckydev/utils';
import { BingoModel } from './models/bingo.model';

export const TEST_DATA = [
  'lepiej dopłacić parę pln i zjeść burgera w normalnej burgerowni',
  'samemu lepszego sobie zrobisz',
  'imagine płacić za to x pln',
  'w tym roku się spierdolit',
  'znowu podrożał',
  'serio ktoś na to czekał?',
  'brakuje drwala na ostro',
  'w tej cenie lepiej zjeść kebsa',
  'to ma masę kalorii',
  'overrated',
  'mcdonalds to syf',
  'za mało sosu, suchy jak wiór',
  'zakręcone frytki >>>> klasyczne frytki',
  '"przepis na domowego drwala"',
  'szkoda że nie ma wersji wege',
  'raz na rok można',
];

@Injectable({
  providedIn: 'root',
})
export class PartyBingoLibService {
  constructor() {}

  public createBingo(values: (string | number)[], name: string): BingoModel {
    return {
      name,
      fields: to2D(shuffle(values)),
    };
  }
}
