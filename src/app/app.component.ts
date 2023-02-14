import { Component, OnInit } from '@angular/core';
import { Position } from './core/enums/position';
import { fieldPositions } from './core/fielPositions';
import { DataService } from './core/services/data.service';
import { StorageService } from './core/services/storage.service';
import { Coach } from './core/types/coach';
import { Player, Team } from './core/types/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public POSITION = Position;
  public teamSelected: Team;
  public coachSelected: Coach;
  public squad: Player[] = [];
  public fieldPositions = fieldPositions;

  constructor(public storageService: StorageService, private _dataService: DataService) { }

  ngOnInit() {
    this.storageService.teamChange$.subscribe((team) => {
      this.teamSelected = team;
    });
    this.storageService.squadChange$.subscribe((squad) => {
      this.squad = squad;
    });
  }

  checkMinimum(squad: Player[], coach: Coach) {
    const goalkeepersMin = this._dataService.getPlayersAmountByPosition(squad, Position.GOALKEEPER) > 1;
    const defendersMin = this._dataService.getPlayersAmountByPosition(squad, Position.DEFENDER) > 3;
    const midfieldersMin = this._dataService.getPlayersAmountByPosition(squad, Position.MIDFIELDER) > 3;
    const attackersMin = this._dataService.getPlayersAmountByPosition(squad, Position.ATTACKER) > 1;

    return !goalkeepersMin || !defendersMin || !midfieldersMin || !attackersMin || !coach;
  }

  getPlayersByPosition = (players: Player[], pos: string) => players.filter(player => player.position == pos);
}
