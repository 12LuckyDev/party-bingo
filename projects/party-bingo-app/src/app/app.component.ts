import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PartyBingoLibService, TEST_DATA } from 'party-bingo-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'party-bingo-app';

  constructor(private _partyBingoLibService: PartyBingoLibService) {
    this._partyBingoLibService.createBingo(TEST_DATA, 'New Bingo');
    console.log(this._partyBingoLibService.createBingo(TEST_DATA, 'New Bingo'));
  }
}
