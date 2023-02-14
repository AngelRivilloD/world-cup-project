import { Component, OnInit } from '@angular/core';
import { Position } from './core/enums/position';
import { fieldPositions } from './core/fielPositions';
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

  constructor(private _storageService: StorageService) { }

  ngOnInit() {
    this._storageService.teamChange$.subscribe((team) => {
      this.teamSelected = team;
    });
  }

  selectPlayer(player: Player, team: Team, squad: Player[]) {
    const nationalPlayer = { ...player, team: team };
    const playerPerCountry = this.squad.filter(player => player.team && player.team.id == team.id);
    const squadMaxCondition = (squad.length < 16);
    const nationalTeamMaxCondition = (playerPerCountry.length < 4);

    this.squad = squadMaxCondition && nationalTeamMaxCondition ? [...squad, nationalPlayer] : squad;
  }

  checkMinimum(squad: Player[], coach: Coach) {
    const goalkeepersMin = this.getLenghtPlayersByPosition(squad, Position.GOALKEEPER) > 1;
    const defendersMin = this.getLenghtPlayersByPosition(squad, Position.DEFENDER) > 3;
    const midfieldersMin = this.getLenghtPlayersByPosition(squad, Position.MIDFIELDER) > 3;
    const attackersMin = this.getLenghtPlayersByPosition(squad, Position.ATTACKER) > 1;

    return !goalkeepersMin || !defendersMin || !midfieldersMin || !attackersMin || !coach;
  }

  getLenghtPlayersByPosition = (squad: Player[], pos: string) => squad.filter(player => player.position == pos).length;

  getPlayersByPosition = (players: Player[], pos: string) => players.filter(player => player.position == pos);

  removePlayer(squad: Player[], player: Player) {
    this.squad = squad.filter(squadPlayer => squadPlayer !== player);
  }
}
