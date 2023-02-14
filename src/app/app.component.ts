import { Component, OnInit } from '@angular/core';
import { Position } from './core/enums/position';
import { fieldPositions } from './core/fielPositions';
import { DataService } from './core/services/data.service';
import { StorageService } from './core/services/storage.service';
import { Coach } from './core/types/coach';
import { Player } from './core/types/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public POSITION = Position;
  public coach: Coach;
  public squad: Player[] = [];
  public fieldPositions = fieldPositions;

  constructor(public storageService: StorageService, private _dataService: DataService) { }

  ngOnInit() {
    this.storageService.squadChange$.subscribe(squad => {
      this.squad = squad;
    });
    this.storageService.coachChange$.subscribe(coach => {
      this.coach = coach;
    });
  }

  checkMinimum(squad: Player[], coach: Coach) {
    const isGoalkeeperAmountCorrect = this._dataService.getPlayersAmountByPosition(squad, Position.GOALKEEPER) > 1;
    const isDefenderAmountCorrect = this._dataService.getPlayersAmountByPosition(squad, Position.DEFENDER) > 3;
    const isMidfielderAmountCorrect = this._dataService.getPlayersAmountByPosition(squad, Position.MIDFIELDER) > 3;
    const isAttackerAmountCorrect = this._dataService.getPlayersAmountByPosition(squad, Position.ATTACKER) > 1;

    return !(isGoalkeeperAmountCorrect && isDefenderAmountCorrect && isMidfielderAmountCorrect && isAttackerAmountCorrect && coach);
  }

  getPlayersByPosition = (players: Player[], pos: string) => players.filter(player => player.position == pos);
}
